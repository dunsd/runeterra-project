import React from "react";
import { getRandomSet } from "../services/braveryHandlers";
import { useState } from "react";
import "./css/BraveryContent.css";

const BraveryContent = () => {
  //set default cards
  const [card1, setCard1] = useState(
    "https://dd.b.pvp.net/latest/set1/en_us/img/cards/01DE002.png"
  );
  const [card2, setCard2] = useState(
    "https://dd.b.pvp.net/latest/set1/en_us/img/cards/01DE002.png"
  );

  return (
    <div className="braveryContent">
      <div className="braveryContainer">
        <p>Ultimate Bravery: Build a deck around these cards!</p>
        <div className="cardImages">
          <div className="cardImg1">
            <img src={card1} alt="Random card 1"></img>
            <button onClick={() => setCard1(getRandomSet())}>
              Generate Card 1
            </button>
          </div>
          <div className="cardImg2">
            <img src={card2} alt="Random card 2"></img>
            <button onClick={() => setCard2(getRandomSet())}>
              Generate Card 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BraveryContent;
