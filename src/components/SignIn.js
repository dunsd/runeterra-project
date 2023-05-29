import React from "react";
import { GoogleAuthProvider } from "firebase"
import { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const [password, setPassword] = useState("");
    const handlePassChange = (e) => {
        const email = e.target.value;
        setEmail(email);
    }
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
            </form>
            Sign In
        </div>
    )
}

export default SignIn;