const express = require("express");

//API key taken from .env to hide it
const key = process.env.REACT_APP_RIOT_KEY;

//middleware router
const lorRoutes = express.Router();

//return user data from account name
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

// return array of matchhistory codes via puuid (puuid = unique id Riot created)
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

// fetch details of a specific match via match code
lorRoutes.get("/matchinfo/:match", async (req, res) => {
  try {
    const matchId = await req.params.match;
    const response = await fetch(
      "https://europe.api.riotgames.com/lor/match/v1/matches/" +
        matchId +
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
})


module.exports = lorRoutes;
