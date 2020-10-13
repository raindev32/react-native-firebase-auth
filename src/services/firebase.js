import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyA6OtiXl3Y7crs8UthWg-c_SsOXrp9AncA',
  authDomain: 'rnfirebase-e668a.firebaseapp.com',
  databaseURL: 'https://rnfirebase-e668a.firebaseio.com/',
  projectId: 'rnfirebase-e668a',
  storageBucket: 'rnfirebase-e668a.appspot.com',
  messagingSenderId: '391181064067',
  appId: '1:391181064067:web:7c4da888b65d07c16e08b6',
  measurementId: 'G-BMERES8CKZ',
};

export const initialize = firebase.initializeApp(firebaseConfig);

export const setListener = (endpoint, updaterFn) => {
  firebase
    .database()
    .ref(endpoint)
    .on('value', updaterFn);
  return () =>
    firebase
      .database()
      .ref(endpoint)
      .off();
};

export const pushData = (endpoint, data) => {
  return firebase
    .database()
    .ref(endpoint)
    .push(data);
};

export const login = (email, pass) =>
  firebase.auth().signInWithEmailAndPassword(email, pass);

export const signup = (email, pass) =>
  firebase.auth().createUserWithEmailAndPassword(email, pass);
