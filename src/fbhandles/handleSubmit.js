import {
  addDoc,
  collection,
  setDoc,
  doc,
  updateDoc,
  getDoc,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

const handleSubmit = (testdata) => {
  const ref = collection(firestore, "test_data");

  let data = {
    testData: testdata,
  };

  try {
    addDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
};

async function newUser(user) {
  await setDoc(doc(firestore, "users", user.email), {
    uid: user.uid,
    email: user.email,
    
  });
}

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

async function checkUserExists(userName) {
  const userRef = doc(firestore, "users", userName);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    return false;
  }
}

export { handleSubmit, newUser, addMatchHistory, getMatches, checkUserExists };
