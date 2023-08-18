import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage,ref,uploadBytes } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeJL6UDAEYYY-N2hsMaGKsIGMhy-WmdEc",
  authDomain: "mkite-4181f.firebaseapp.com",
  projectId: "mkite-4181f",
  storageBucket: "mkite-4181f.appspot.com",
  messagingSenderId: "364861709603",
  appId: "1:364861709603:web:507a388ed54fad54b18096",
  measurementId: "G-GBH4F0DBWJ"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app)
export const db = getFirestore(app)
export const storage=getStorage(app)
// const analytics = getAnalytics(app);
export default app



