import { setDoc, doc, updateDoc, getDoc } from "@firebase/firestore";
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
  try {
    console.log(user);
    const userRef = doc(firestore, "users", user);
    await updateDoc(userRef, {
      matches: matches,
    });
  } catch (error) {
    console.log(error);
  };
};

//return data assigned to a user
async function getMatches(user) {
  try {
    const userRef = doc(firestore, "users", user);
    const docSnap = await getDoc(userRef);
    console.log(docSnap.data());
  } catch (error) {
    console.log(error);
  };
};

//check if user exists in firestore
async function checkUserExists(userName) {
  try {
    const userRef = doc(firestore, "users", userName);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  };
};

export { newUser, addMatchHistory, getMatches, checkUserExists };
