import key from "./APIKey";

async function fetchUserDetails(id) {
    try {
        const response = await fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'
        +id+'?api_key=' + key,
        {
            mode: 'cors',
        });
        const data = await response.json();
        console.log(data);
        return data;
        
    }
    catch(error) {
        console.log(error);
    }
}

export {fetchUserDetails};