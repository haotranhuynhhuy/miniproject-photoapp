import React from 'react';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/photos',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //   firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};


const SignIn = () => {
    return (
        <div>
            <div className='text-center'>
                <h2>Login</h2>
                <p>or Login with Google</p>
                <StyledFirebaseAuth 
                uiConfig={uiConfig} 
                firebaseAuth={firebase.auth()} />
            </div>
        </div>
    )
}

export default SignIn;