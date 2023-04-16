import React, { useState } from "react";
import { fetchUserDetails } from "../services/APICalls";
import MatchHistory from "./MatchHistory";


const APIDetails = () => {

   const [userInfo, setUserInfo] = useState(() => {
        const storedAcc = localStorage.getItem("accountInfo");
        const parsedAcc = JSON.parse(storedAcc);
        return parsedAcc || "";
   });

   

    async function getUser(name) {
        const userData = await fetchUserDetails(name);
        setUserInfo(userData);
        localStorage.setItem("accountInfo", JSON.stringify(userData));
        console.log(userInfo);
    } 

    

    return (
        <div className="matchContentDiv">
            <div className="userInfo">
                <button onClick={() => getUser("Ulfilas")}>Get User</button>
                <div className="userName">Account Name: {userInfo.name || ""}</div>
                <div className="userPUUID">PUUID: {userInfo.puuid || ""}</div>
                <div className="userLevel">Account Level: {userInfo.summonerLevel || ""}</div>
            </div>
            <MatchHistory 
                userInfo = {userInfo}
            />
        </div>
    )
}

export default APIDetails;