import React from "react";
import { useState, useEffect } from "react";

const UserForm = () => {
    
    const [isVisible, setIsVisible] = useState(false);

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

    const toggleForm = (e) => {
        setIsVisible(prevIsVisible => !prevIsVisible);
    }

    return (
        <div className="userDetails">
            <button className="changeUserBtn" onClick={toggleForm}>Change User</button>
            {isVisible &&
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
            }

            <div>
                Current User: {userName}
            </div>
            

        </div>
    )
}

export default UserForm;