import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyC9-Q_R2eLfhhzhCvGGbpRkAZ8_j40xQK0",
    authDomain: "znajdzstazyste-34301.firebaseapp.com",
    databaseURL: "https://znajdzstazyste-34301.firebaseio.com",
    projectId: "znajdzstazyste-34301",
    storageBucket: "znajdzstazyste-34301.appspot.com",
    messagingSenderId: "928317071093"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();

