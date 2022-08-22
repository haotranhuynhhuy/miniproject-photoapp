import firebase from 'firebase'

const currentUser = firebase.auth().currentUser;
const userApi = {
    getMe: () =>{
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve({
                    id: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photo: currentUser.photoURL
                })
            },500)
        })
    }
}

export default userApi;