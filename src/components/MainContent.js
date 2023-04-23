import React from "react";
import "./css/MainContent.css";
import userInfoExample from "../images/user-info-example.png"
import matchHistoryExample from "../images/match-history-example.png"
import braveryExample from "../images/ultimate-bravery-example.png"

const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="mainContainer">
        <h1>Welcome to the Runeterra Hub!</h1>
        <p>
          Current features include viewing your match history and a card
          generator to build decks in an Ultimate Bravery style.
        </p>
        <figure>
            <figcaption>Enter your username to obtain your details:</figcaption>
            <img className="exampleImage" src={userInfoExample} alt="user info example"></img>
        </figure>
        <figure>
            <figcaption>View your match history!</figcaption>
            <img className="exampleImage" src={matchHistoryExample} alt="match history example"></img>
        </figure>
        <figure>
            <figcaption>Generate random cards for a bravery deck!</figcaption>
            <img className="exampleImage" src={braveryExample} alt="ultimate bravery example"></img>
        </figure>
      </div>
    </div>
  );
};

export default MainContent;
