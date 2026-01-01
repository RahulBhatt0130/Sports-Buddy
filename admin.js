
import { db } from "./firebaseConfig.js";
import { collection, addDoc, deleteDoc, doc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { logAction } from "./logger.js";

export async function addCategory(category, admin) {
  await addDoc(collection(db, "categories"), { category });
  logAction("Category Added", admin);
}

export async function deleteCategory(id, admin) {
  await deleteDoc(doc(db, "categories", id));
  logAction("Category Deleted", admin);
}
