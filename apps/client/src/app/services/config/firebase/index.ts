import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_yXJAvSnKDyCHvUCgPc8Vg7q6ptKwC7Y",
  authDomain: "infralastic-2030c.firebaseapp.com",
  projectId: "infralastic-2030c",
  storageBucket: "infralastic-2030c.appspot.com",
  messagingSenderId: "870226706731",
  appId: "1:870226706731:web:1c14e269a8aab33c8dc56e"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
