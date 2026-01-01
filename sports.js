
import { db } from "./firebaseConfig.js";
import { collection, addDoc, getDocs, deleteDoc, doc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { logAction } from "./logger.js";

export async function addSportEvent(name, city, area, user) {
  await addDoc(collection(db, "sportsEvents"), {
    name,
    city,
    area,
    createdBy: user
  });
  logAction("Sport Event Added", user);
}

export async function getSportEvents() {
  const snapshot = await getDocs(collection(db, "sportsEvents"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function deleteSportEvent(id, user) {
  await deleteDoc(doc(db, "sportsEvents", id));
  logAction("Sport Event Deleted", user);
}
