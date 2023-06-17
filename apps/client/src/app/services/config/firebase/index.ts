import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7lIlcrHCJBHtE7rU6ipfVBb__lZ8GVM0",
  authDomain: "infra-d9102.firebaseapp.com",
  projectId: "infra-d9102",
  storageBucket: "infra-d9102.appspot.com",
  messagingSenderId: "289662724568",
  appId: "1:289662724568:web:2a7012396cf8fb4ee46aad",
  measurementId: "G-FESRJHFBZT"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
