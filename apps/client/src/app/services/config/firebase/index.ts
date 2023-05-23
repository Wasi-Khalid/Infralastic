import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBMWuRdqxarJ6q7O5uoU1cOfPvUwAuKFZk",
    authDomain: "infralastic-b118f.firebaseapp.com",
    projectId: "infralastic-b118f",
    storageBucket: "infralastic-b118f.appspot.com",
    messagingSenderId: "147933883040",
    appId: "1:147933883040:web:5bf7ae078993ac757377c5"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
