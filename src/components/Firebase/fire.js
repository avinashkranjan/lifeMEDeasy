import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDSkiYb2dZ0KfxZyKVh1ZtRwZUpC71NRi8",
    authDomain: "lifemedeasy.firebaseapp.com",
    databaseURL: "https://lifemedeasy.firebaseio.com",
    projectId: "lifemedeasy",
    storageBucket: "lifemedeasy.appspot.com",
    messagingSenderId: "653719494307",
    appId: "1:653719494307:web:c754ceb2481684cd582916",
    measurementId: "G-D9E1T079K4"
  };
const fire=firebase.initializeApp(config);
export default fire;