import React, { useEffect } from "react";
import { auth } from "../firebase_setup/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { newUser } from "../fbhandles/handleSubmit";
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
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      newUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signInUser = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log(result);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user))
  // })

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
        <button onClick={createUser}>Create User</button>
        <button onClick={signInUser}>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
