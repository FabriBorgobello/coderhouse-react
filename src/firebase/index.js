import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdBDCD8ts45eWEEWgfOrPbPZcuaYtb-0w",
  authDomain: "xiaomeria-ef30a.firebaseapp.com",
  databaseURL: "https://xiaomeria-ef30a.firebaseio.com",
  projectId: "xiaomeria-ef30a",
  storageBucket: "xiaomeria-ef30a.appspot.com",
  messagingSenderId: "131452320234",
  appId: "1:131452320234:web:56161a88a390dd86121a93",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);

const db = getFirestore();
export default db;
