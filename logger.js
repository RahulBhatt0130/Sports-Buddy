
import { db } from "./firebaseConfig.js";
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function logAction(action, user) {
  try {
    await addDoc(collection(db, "logs"), {
      action,
      user,
      time: Timestamp.now()
    });
    console.log("LOG:", action);
  } catch (error) {
    console.error("Logging failed", error);
  }
}
