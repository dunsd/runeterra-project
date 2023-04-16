import React, {useState} from "react";
import { fetchMatchHistory, fetchMatchInfo } from "../services/APICalls";
import MatchPopUp from "./MatchPopUp";

const MatchHistory = ({userInfo}) => {

    const [activeMatch, setActiveMatch] = useState("");

    const [matchToggle, setMatchToggle] = useState(false);

    const [matchHistory, setMatchHistory] = useState(() => {
        const storedHistory = localStorage.getItem("matchHistory");
        const parsedHistory = JSON.parse(storedHistory);
        return parsedHistory || "";
    })

    async function getMatchHistory(puuid) {
        const userMatchHistory = await fetchMatchHistory(puuid);
        setMatchHistory(userMatchHistory);
        localStorage.setItem('matchHistory', JSON.stringify(userMatchHistory));
        console.log(matchHistory);
    }

    async function getMatchInfo(e) {
        const matchIndex = e.target.id;
        const matchInfo = await fetchMatchInfo(matchHistory[matchIndex]);
        console.log(matchInfo);
        setActiveMatch(matchInfo);
        setMatchToggle(true);
        return matchInfo;
    }

    return (
        <div className="matchHistoryDiv">
            <button onClick={() => getMatchHistory(userInfo.puuid)}>Get Match History</button>
            <ul className="matchHistory"> Match Codes: 
                {matchHistory.map((match, index) => {
                    return (
                        <li className="matchList" key={index}>
                            Match {index+1}: {match}
                            <button  id={index} onClick={(e) => getMatchInfo(e)}>Show match info</button>
                        </li>
                    )
                })}
            </ul>
            {matchToggle &&
                <MatchPopUp 
                    setMatchToggle = {setMatchToggle}
                    activeMatch = {activeMatch}
                />
            }
        </div>
    )
}

export default MatchHistory;