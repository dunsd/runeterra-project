import React from "react";
import { getRandomCard } from "../services/braveryHandlers";
import { useState } from "react";
import "./css/BraveryContent.css";

const BraveryContent = () => {

    const [card1, setCard1] = useState("https://dd.b.pvp.net/latest/set1/en_us/img/cards/01DE002.png");
    const [card2, setCard2] = useState("https://dd.b.pvp.net/latest/set1/en_us/img/cards/01DE002.png");

    return (
        <div className="braveryContent">
            <p>Ultimate Bravery: Build a deck around these cards!</p>
            <div className="cardImages">
                <div className="cardImg1">
                    <img src={card1} alt="test"></img>
                    <button onClick={() => setCard1(getRandomCard())}>Get Set7</button>
                </div>
                <div className="cardImg2">
                    <img src={card2} alt="test"></img>
                    <button onClick={() => setCard2(getRandomCard())}>Get Set7</button>
                </div>
            </div>
            
        </div>
    )
}

export default BraveryContent;