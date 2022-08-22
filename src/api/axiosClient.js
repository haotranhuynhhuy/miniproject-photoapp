import axios from 'axios'
import queryString from 'query-string'
import firebase from 'firebase'
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params)
})

const getFirebaseToken = async () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) return currentUser.getIdToken();
    // Not loged in
    // const rememberedAccount = localStorage.getItem('firebaseui::rememberedAccounts')
    // if (!rememberedAccount) return null;
    //Loged in but current is not fetch
    return new Promise((resolve, reject) => {
        const waiterTimer = setTimeout(() => {
            reject(null)
        }, 10000)

        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            const token = await user.getIdToken();
            console.log('Loged in user token', token);
            resolve(token);
            unregisterAuthObserver();
            clearTimeout(waiterTimer)
        });
    })

}

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    const token = await getFirebaseToken();
    if (token) { config.headers.Authorization = `Bearer ${token}` }
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient