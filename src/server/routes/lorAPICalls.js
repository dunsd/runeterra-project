// import {
//   fetchMatchHistory,
//   fetchMatchInfo,
//   fetchUserDetails,
// } from "../../services/APICalls";
const express = require("express");

const key = process.env.REACT_APP_RIOT_KEY;

async function fetchUserDetails(id) {
  try {
    const response = await fetch(
      "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
        id +
        "?api_key=" +
        key,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const lorRoutes = express.Router();

lorRoutes.get("/:username", async (req, res) => {
    try{
        const user = await req.params.username;
        const response = await fetch(
            "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
              user +
              "?api_key=" +
              key,
            {
              mode: "cors",
            }
          );
          const data = await response.json();
          res.json(data);
    }
    catch (error) {
        console.log(error);
    }
  
//   const result = fetchUserDetails(user);
//   console.log(result);
//   res.json(result);
});

module.exports = lorRoutes;