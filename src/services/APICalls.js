//fetch user info via username
const fetchUserDetails = async (id) => {
  try {
    const result = await fetch(`http://localhost:8000/user/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    //console.log(`Data: ${data}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//fetch array of match codes from puuid
const fetchMatchHistory = async (puuid) => {
  try {
    const result = await fetch(`http://localhost:8000/matchhistory/${puuid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Fetch individual match info via match code
const fetchMatchInfo = async (matchid) => {
  try {
    const result = await fetch(`http://localhost:8000/matchinfo/${matchid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchUserDetails, fetchMatchHistory, fetchMatchInfo };
