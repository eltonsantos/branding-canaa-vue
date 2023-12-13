import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB8A3UHhvM-LlODrOGE8bYqm8ep-m2hrwQ",
  authDomain: "branding-canaa.firebaseapp.com",
  projectId: "branding-canaa",
  storageBucket: "branding-canaa.appspot.com",
  messagingSenderId: "942102079199",
  appId: "1:942102079199:web:21197d84da2ad3c8b32b6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }