import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import APIDetails from "./components/APIDetails";

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/API" element={<APIDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;