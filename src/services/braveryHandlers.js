import set1 from "../dd_files/set1-en_us.js";
import set2 from "../dd_files/set2-en_us.js";
import set3 from "../dd_files/set3-en_us.js";
import set4 from "../dd_files/set4-en_us.js";
import set5 from "../dd_files/set5-en_us.js";
import set6 from "../dd_files/set6-en_us.js";
import set7 from "../dd_files/set7-en_us.js";

//get random set and return image url for card
const getRandomSet = () => {
  const rndSet = Math.floor(Math.random() * 7) + 1;
  switch (rndSet) {
    case 1:
      return buildCardURL("set1", getRandom(set1));
    case 2:
      return buildCardURL("set2", getRandom(set2));
    case 3:
      return buildCardURL("set3", getRandom(set3));
    case 4:
      return buildCardURL("set4", getRandom(set4));
    case 5:
      return buildCardURL("set5", getRandom(set5));
    case 6:
      return buildCardURL("set6", getRandom(set6));
    case 7:
      return buildCardURL("set7", getRandom(set7));
    default:
      console.log("Failed");
  }
};

//get the card code for a random set
const getRandom = (set) => {
  return set[Math.floor(Math.random() * set.length)].cardCode;
};

//return url for where card images are hosted
const buildCardURL = (set, code) => {
  return (
    "https://dd.b.pvp.net/latest/" + set + "/en_us/img/cards/" + code + ".png"
  );
};

export { getRandomSet };
