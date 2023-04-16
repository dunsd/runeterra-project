import React from "react";

const MatchPopUp = ({setMatchToggle, activeMatch}) => {

    return (
        <div className="matchPopUp">
            <div className="popHeader">
                <h1>Match Details:</h1>
                <button className="closeBtn" onClick={() => setMatchToggle(false)}>Close</button>
            </div>
            <ul>
                <li>Game Mode: {activeMatch.info.game_mode} </li>
                <li>Game Type: {activeMatch.info.game_type}</li>
                <li>Turn Count: {activeMatch.info.total_turn_count}</li>
                <li>Time of Game: {activeMatch.info.game_start_time_utc}</li>
                <li>Win or Loss: {activeMatch.info.players[0].game_outcome}</li>
            </ul>
            
        </div>
    )
}

export default MatchPopUp;