
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC_xV5eLSZ2wKp7IN6mBf-6UQVC5CPceBA",
  authDomain: "atp-final.firebaseapp.com",
  projectId: "atp-final",
  storageBucket: "atp-final.appspot.com",
  messagingSenderId: "746299207173",
  appId: "1:746299207173:web:4db8ab12bbce5d753b766c",
  measurementId: "G-FMK0KX95JX"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);