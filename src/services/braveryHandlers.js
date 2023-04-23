
import set7 from "../dd_files/set7-en_us.js";

// fetch('./src/dd_files/set7-en_us.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


const getRandomCard = () => {
    console.log(set7);
    const cardCode = set7[Math.floor(Math.random()*set7.length)].cardCode;
    console.log(cardCode);
    console.log(buildCardURL("set7", cardCode));
}

// async function getCardArr = () => {

// }

// const getRandomRegion = () => {

// }

const buildCardURL = (set, code) => {
    return "https://dd.b.pvp.net/latest/" + set + "/en_us/img/cards/" + code + ".png";
}

export {getRandomCard}