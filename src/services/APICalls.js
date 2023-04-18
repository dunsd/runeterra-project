const key = process.env.REACT_APP_RIOT_KEY;


async function fetchUserDetails(id) {
    try {
        const response = await fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
        +id+'?api_key=' + key,
        {
            mode: 'cors',
        });
        const data = await response.json();
        //console.log(data);
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

async function fetchMatchHistory(puuid) {
    try {
        const response = await fetch('https://europe.api.riotgames.com/lor/match/v1/matches/by-puuid/'
        +puuid+'/ids?api_key='+key,
        {
            mode: 'cors',
        });
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

async function fetchMatchInfo(match) {
    try {
        const response = await fetch('https://europe.api.riotgames.com/lor/match/v1/matches/'
        +match+'?api_key='+key,
        {
            mode: 'cors',
        })
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

export {fetchUserDetails, fetchMatchHistory, fetchMatchInfo};
