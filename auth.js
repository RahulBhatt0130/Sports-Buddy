
import { auth } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { logAction } from "./logger.js";

export function register(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      logAction("User Registered", email);
      alert("Registration Successful");
    })
    .catch(err => alert(err.message));
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      logAction("User Logged In", email);
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}
