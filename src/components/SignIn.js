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

const SignIn = ({user, setUser}) => {
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
      //console.log(result);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {

    auth.signOut();
    setUser(null);
    console.log("Signed Out")
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Auth change")
      console.log(user);
    })
  }, [user])

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
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default SignIn;
