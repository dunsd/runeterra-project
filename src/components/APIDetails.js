import React, { useState } from "react";
import { fetchMatchHistory, fetchUserDetails } from "../services/APICalls";

const APIDetails = () => {

   const [userInfo, setUserInfo] = useState(() => {
        const storedAcc = localStorage.getItem("accountInfo");
        const parsedAcc = JSON.parse(storedAcc);
        return parsedAcc || "";
   });

   const [matchHistory, setMatchHistory] = useState(() => {
        const storedHistory = localStorage.getItem("matchHistory");
        const parsedHistory = JSON.parse(storedHistory);
        return parsedHistory || "";
   })

    async function getUser(name) {
        const userData = await fetchUserDetails(name);
        setUserInfo(userData);
        localStorage.setItem("accountInfo", JSON.stringify(userData));
        console.log(userInfo);
    }

    async function getMatchHistory(puuid) {
        const userMatchHistory = await fetchMatchHistory(puuid);
        setMatchHistory(userMatchHistory);
        localStorage.setItem('matchHistory', JSON.stringify(userMatchHistory));
        console.log(matchHistory);
    }

    return (
        <div>
            <button onClick={() => getUser("Ulfilas")}>Get User</button>
            <div className="userName">Account Name: {userInfo.name || ""}</div>
            <div className="userPUUID">PUUID: {userInfo.puuid || ""}</div>
            <div className="userLevel">Account Level: {userInfo.summonerLevel || ""}</div>
            <button onClick={() => getMatchHistory(userInfo.puuid)}>Get Match History</button>
            <ul className="matchHistory"> Match Codes: 
                {matchHistory.map((match, index) => {
                    return (
                        <li key={index}>Match {index}: {match}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default APIDetails;