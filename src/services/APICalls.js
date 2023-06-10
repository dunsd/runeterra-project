
//fetch user info via puuid
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

//fetch array of match codes
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

//Fetch individual match info via match code
const fetchMatchInfo = async (matchid) => {
  const result = await fetch(`http://localhost:8000/matchinfo/${matchid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  return data;
}

export { fetchUserDetails, fetchMatchHistory, fetchMatchInfo };
