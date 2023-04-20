import React, { useState } from "react";
import { fetchMatchInfo } from "../services/APICalls";
import MatchPopUp from "./MatchPopUp";

const MatchHistory = ({ userInfo, matchHistory, getMatchHistory }) => {
  const [activeMatch, setActiveMatch] = useState("");

  const [matchToggle, setMatchToggle] = useState(false);

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
      <button onClick={() => getMatchHistory(userInfo.puuid, userInfo.name)}>
        Update Match History
      </button>
      <ul className="matchHistory">
        {" "}
        Match Codes:
        {matchHistory.map((match, index) => {
          return (
            <li className="matchList" key={index}>
              Match {index + 1}: {match}
              <button id={index} onClick={(e) => getMatchInfo(e)}>
                Show match info
              </button>
            </li>
          );
        })}
      </ul>
      {matchToggle && (
        <MatchPopUp setMatchToggle={setMatchToggle} activeMatch={activeMatch} />
      )}
    </div>
  );
};

export default MatchHistory;
