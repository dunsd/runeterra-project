import React from "react";
import { useState, useEffect } from "react";

const UserForm = () => {
    
    const [userName, setUserName] = useState(() => {
        const storedUser = localStorage.getItem("userName");
        const parsedUser = JSON.parse(storedUser);
        return parsedUser || "";
    });

    const handleUserNameChange = (e) => {
        const name = e.target.value;
        setUserName(name);
    }
    
    useEffect(() => {
        localStorage.setItem("userName", JSON.stringify(userName))
    }, [userName]);


    return (
        <form 
            className="userForm"
            onSubmit={(e) => e.preventDefault()}
        >
            <label htmlFor="nameEntry">Username:</label>
            <input
                name="nameEntry"
                type="text"
                value={userName}
                onChange={handleUserNameChange}
                placeholder="Username"
            />

            <input type="submit" value="Submit"></input>

        </form>
    )
}

export default UserForm;