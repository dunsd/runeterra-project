import React, { useEffect } from "react";
import { auth } from "../firebase_setup/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,

} from "@firebase/auth";
import { newUser } from "../fbhandles/firestoreFunctions";
import { useState } from "react";

const SignIn = ({ user, setUser }) => {

  //handlers for entering values
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


  //create user with firebase auth and store in firestore
  const createUser = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      newUser(user);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signInUser = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      setUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    auth.signOut();
    setUser(null);
    console.log("Signed Out");
  };

  //monitor if user state changes
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Auth change");
      console.log(user);

      //To add, re-route/action on sign in/out
    });
  }, [user]);

  return (
    <div className="signIn">
      <form className="signInForm">
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
          type="password"
          value={password}
          onChange={handlePassChange}
        />
      </form>
      <div className="signButtons">
        <button onClick={createUser}>Create User</button>
        <button onClick={signInUser}>Sign In</button>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default SignIn;
