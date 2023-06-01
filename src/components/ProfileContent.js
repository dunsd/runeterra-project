import React, { useState } from "react";
import "./css/Main.css";
import UserForm from "./UserForm";
import APIDetails from "./APIDetails";
import SignIn from "./SignIn";

const ProfileContent = () => {

  const [user, setUser] = useState("");

  return (
    <div className="profileContent">
      <SignIn
      user={user}
      setUser={setUser}
      />
      <UserForm />
      {user && <APIDetails />}
    </div>
  );
};

export default ProfileContent;
