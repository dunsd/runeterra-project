import React from "react";
import { getRandomCard } from "../services/braveryHandlers";

const BraveryContent = () => {

    return (
        <div className="braveryContent">
            Bravery Content
            <div className="cardImg1">
                <img src="https://dd.b.pvp.net/latest/set1/en_us/img/cards/01DE002.png" alt="test"></img>
                <button onClick={() => getRandomCard()}>Get Set7</button>
            </div>
            
        </div>
    )
}

export default BraveryContent;