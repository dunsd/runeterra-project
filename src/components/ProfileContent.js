import React, { useState } from "react";
import "./css/Main.css";
import UserForm from "./UserForm";
import APIDetails from "./APIDetails";
import SignIn from "./SignIn";

const ProfileContent = () => {
  //current signed in user, if null then don't show API details
  const [user, setUser] = useState("");

  return (
    <div className="profileContent">
      <SignIn user={user} setUser={setUser} />
      <UserForm />
      {user && <APIDetails />}
    </div>
  );
};

export default ProfileContent;
