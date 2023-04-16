import React, {useState} from "react";
import { fetchMatchHistory, fetchMatchInfo } from "../services/APICalls";

const MatchHistory = ({userInfo}) => {


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

    async function showMatchInfo(match) {
        const matchInfo = await fetchMatchInfo(match);
        console.log(matchInfo);
    }

    return (
        <div>
            <button onClick={() => getMatchHistory(userInfo.puuid)}>Get Match History</button>
            <ul className="matchHistory"> Match Codes: 
                {matchHistory.map((match, index) => {
                    return (
                        <li key={index}>Match {index}: {match}
                        <button onClick={() => showMatchInfo(matchHistory[index])}>Show match info</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MatchHistory;