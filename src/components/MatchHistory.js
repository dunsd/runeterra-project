import React, {useState} from "react";
import { fetchMatchHistory, fetchMatchInfo } from "../services/APICalls";
import MatchPopUp from "./MatchPopUp";

const MatchHistory = ({userInfo}) => {


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

    const showMatchInfo = () => {
        setMatchToggle(true);
    }
    // async function showMatchInfo(match) {
    //     const matchInfo = await fetchMatchInfo(match);
    //     console.log(matchInfo);
    // }

    return (
        <div>
            <button onClick={() => getMatchHistory(userInfo.puuid)}>Get Match History</button>
            <ul className="matchHistory"> Match Codes: 
                {matchHistory.map((match, index) => {
                    return (
                        <li key={index}>
                            Match {index}: {match}
                            <button onClick={() => showMatchInfo(matchHistory[index])}>Show match info</button>
                        </li>
                    )
                })}
            </ul>
            {matchToggle &&
                <MatchPopUp 
                    setMatchToggle = {setMatchToggle}
                />
            }
        </div>
    )
}

export default MatchHistory;