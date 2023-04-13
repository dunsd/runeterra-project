import React, { useState } from "react";
import { fetchUserDetails } from "../services/APICalls";

const APIDetails = () => {

   const [userInfo, setUserInfo] = useState({});

    async function getUser(name) {
        const userData = await fetchUserDetails(name);
        setUserInfo(userData);
        console.log(userInfo);
    }

    return (
        <div>
            <button onClick={() => getUser("Ulfilas")}>Get User</button>
            {userInfo.id}
            <div className="userName">Account Name: {userInfo.name || ""}</div>
            <div className="userPUUID">PUUID: {userInfo.puuid || ""}</div>
            <div className="userLevel">Account Level: {userInfo.summonerLevel || ""}</div>
        </div>
    )
}

export default APIDetails;