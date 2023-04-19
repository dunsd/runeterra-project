import React, { useState } from "react";
import { fetchUserDetails, fetchMatchHistory } from "../services/APICalls";
import MatchHistory from "./MatchHistory";
import { checkUserExists, addMatchHistory } from "../fbhandles/handleSubmit";


const APIDetails = () => {

   const [userInfo, setUserInfo] = useState(() => {

        const storedAcc = localStorage.getItem("accountInfo");
        const parsedAcc = JSON.parse(storedAcc);
        return parsedAcc || "";
   });
   
   const [matchHistory, setMatchHistory] = useState([]);

    async function getUser() {
        const currentUser = localStorage.getItem("userName");
        const parsedUser = JSON.parse(currentUser);
        let userData = await fetchUserDetails(parsedUser);
        if(!checkValidUser(userData)) userData = "";
        setUserInfo(userData);
        localStorage.setItem("accountInfo", JSON.stringify(userData));
        console.log(userInfo);
    }
    
    async function userCheck() {
        const currentUser = localStorage.getItem("userName");
        const parsedUser = JSON.parse(currentUser);
        const userCheck = await checkUserExists(parsedUser);
        if(userCheck !== false) {
            setUserInfo(userCheck.user);
            setMatchHistory(userCheck.matches);
            console.log("Exists");
            console.log(userCheck.user);
            console.log(userCheck.matches);
        }   
        else {
            getUser();
        }
    }

    async function getMatchHistory(puuid, name) {
        const userMatchHistory = await fetchMatchHistory(puuid);
        setMatchHistory(userMatchHistory);
        console.log(matchHistory)
        localStorage.setItem('matchHistory', JSON.stringify(userMatchHistory));
        addMatchHistory(matchHistory, name);
    }

    const checkValidUser = (userData) => {
        if (userData === undefined) {
            alert("User data cannot be found");
            return false;
        }
        else {
            return true;
        }
    }   

    return (
        <div className="matchContentDiv">
            <div className="userInfo">
                <button onClick={() => userCheck()}>Get User</button>
                <div className="userName"><p className="userLabel">Account Name:</p> {userInfo.name || ""}</div>
                <div className="userPUUID"><p className="userLabel">PUUID:</p> {userInfo.puuid || ""}</div>
                <div className="userLevel"><p className="userLabel">Account Level:</p> {userInfo.summonerLevel || ""}</div>
            </div>
            <MatchHistory 
                userInfo = {userInfo}
                matchHistory = {matchHistory}
                getMatchHistory = {getMatchHistory}
            />
            <button onClick={() => checkUserExists("Ulfilas")}>New user</button>
        </div>
    )
}

export default APIDetails;