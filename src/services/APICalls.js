// const key = process.env.REACT_APP_RIOT_KEY;

// async function fetchUserDetails(id) {
//   try {
//     const response = await fetch(
//       "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
//         id +
//         "?api_key=" +
//         key,
//       {
//         mode: "cors",
//       }
//     );
//     const data = await response.json();
//     //console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

const fetchUserDetails = async (id) => {
  const result = await fetch(`http://localhost:8000/user/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  console.log(`Data: ${data}`)
  return data;
}

// async function fetchMatchHistory(puuid) {
//   try {
//     const response = await fetch(
//       "https://europe.api.riotgames.com/lor/match/v1/matches/by-puuid/" +
//         puuid +
//         "/ids?api_key=" +
//         key,
//       {
//         mode: "cors",
//       }
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
const fetchMatchHistory = async (puuid) => {

  const result = await fetch(`http://localhost:8000/matchhistory/${puuid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  return data;

} 
// async function fetchMatchInfo(match) {
//   try {
//     const response = await fetch(
//       "https://europe.api.riotgames.com/lor/match/v1/matches/" +
//         match +
//         "?api_key=" +
//         key,
//       {
//         mode: "cors",
//       }
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

const fetchMatchInfo = async () => {

}

export { fetchUserDetails, fetchMatchHistory, fetchMatchInfo };
