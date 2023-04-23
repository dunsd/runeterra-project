import React from "react";
import "./css/Main.css";
import UserForm from "./UserForm";
import APIDetails from "./APIDetails";

const ProfileContent = () => {
  return (
    <div className="maincontent">
      <UserForm />
      <APIDetails />
    </div>
  );
};

export default ProfileContent;
