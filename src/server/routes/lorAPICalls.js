const express = require("express");

const key = process.env.REACT_APP_RIOT_KEY;

const lorRoutes = express.Router();

lorRoutes.get("/user/:username", async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
});

lorRoutes.get("/matchhistory/:puuid", async (req, res) => {
    try {
        const puuid = await req.params.puuid;
        const response = await fetch(
            "https://europe.api.riotgames.com/lor/match/v1/matches/by-puuid/" +
              puuid +
              "/ids?api_key=" +
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
})

async function fetchMatchHistory(puuid) {
    try {
      const response = await fetch(
        "https://europe.api.riotgames.com/lor/match/v1/matches/by-puuid/" +
          puuid +
          "/ids?api_key=" +
          key,
        {
          mode: "cors",
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

module.exports = lorRoutes;
