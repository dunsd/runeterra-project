import React from "react";
import { auth } from "../firebase_setup/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import { useState } from "react";

const SignIn = () => {
  //const auth = getAuth();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const [password, setPassword] = useState("");
  const handlePassChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signInUser = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="emailEntry">Email:</label>
        <input
          name="emailEntry"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="passEntry">Password:</label>
        <input
          name="passEntry"
          type="text"
          value={password}
          onChange={handlePassChange}
        />
        <button onClick={signInUser}>Create User</button>
      </form>
    </div>
  );
};

export default SignIn;
