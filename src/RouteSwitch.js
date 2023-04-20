import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import APIDetails from "./components/APIDetails";
import Profile from "./Profile";

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;