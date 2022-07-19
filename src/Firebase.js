import firebase from 'firebase';
import store from './store';

const settings = {timestampsInSnapshots:true};

const config = {
    apiKey: "AIzaSyCTW6zzxNjF9773ckCGFp1hw4_XYPywgXY",
    authDomain: "projekti-bc316.firebaseapp.com",
    projectId: "projekti-bc316",
    storageBucket: "projekti-bc316.appspot.com",
    messagingSenderId: "297345223107",
    appId: "1:297345223107:web:6dc906dba5dc0b854e9576"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);
firebase.auth().onAuthStateChanged(user=>{
    store.dispatch("fetchUser", user);
});

firebase.getCurrentUser = ()=>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
            unsubscribe();
            resolve(user);
        },reject);
    })
};

export default firebase;
