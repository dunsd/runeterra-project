import {
  addDoc,
  collection,
  setDoc,
  doc,
  updateDoc,
  getDoc,
  where,
  query,
  getDocs,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

//create user with email as the id
async function newUser(user) {
  await setDoc(doc(firestore, "users", user.email), {
    uid: user.uid,
    email: user.email,
  });
}

//add array of Match History to Users.
async function addMatchHistory(matches, user) {
  console.log(user);
  const userRef = doc(firestore, "users", user);
  await updateDoc(userRef, {
    matches: matches,
  });
}

async function getMatches(user) {
  const userRef = doc(firestore, "users", user);
  const docSnap = await getDoc(userRef);
  console.log(docSnap.data());
}

//check if user exists in firestore
async function checkUserExists(userName) {
  const userRef = doc(firestore, "users", userName);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    return false;
  }
}

export { newUser, addMatchHistory, getMatches, checkUserExists };
