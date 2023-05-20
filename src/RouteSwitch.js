import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Bravery from "./Bravery";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bravery" element={<Bravery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
