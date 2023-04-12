import key from "./APIKey";

async function fetchUserDetails(id) {
    try {
        const response = fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/$'+id+key);
        return await response.json();
    }
    catch(error) {
        console.log(error);
    }
}

export {fetchUserDetails};