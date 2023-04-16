import React from "react";

const MatchPopUp = ({setMatchToggle}) => {
    
    return (
        <div className="matchPopUp">
            Pop Up
            <button onClick={() => setMatchToggle(false)}>Close</button>
        </div>
    )
}

export default MatchPopUp;