import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBGmcQMpkrpBMf9SFfuqvfFwMLExfGC5SA",
  authDomain: "acm-sigkdd-srm-ktr.firebaseapp.com",
  databaseURL: "https://gfgsc-gcet-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "acm-sigkdd-srm-ktr",
  storageBucket: "acm-sigkdd-srm-ktr.appspot.com",
  messagingSenderId: "306151762770",
  appId: "1:306151762770:web:c28aa9eb3f0504cc2d688b",
  measurementId: "G-4Q7XHKPT99"
};

export const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore();
export const database = getDatabase();
export const storage = getStorage(app);
