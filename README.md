# Runeterra Project

This project is designed to interface with the game [Legends of Runeterra](https://playruneterra.com/en-us/), made by Riot Games. It handles this by making requests to the [Riot API](https://developer.riotgames.com/). This requires a private API key. Currently this project is not deployed fully as a back-end needs to be implemented to hide the API key from the front-end.

# Features
 - View match history
 - View account details
 - View pop-up of specific match details
 - Store match history of users in Firebase
 - Ultimate Bravery mode: This generates two random cards from all sets and then you should build a deck that uses 3 copies of both and try and win.

## Technology Used
 - Create React App
 - Javascript
 - CSS

## Planned Improvements
 - Change match history display to show more details (requires further storage options to limit API requests)
 - Add user authentication using Firebase Auth to provide read/write permissions
 - Add calculator for winrate
 - Add profile page

## How To Use
If you have a Riot Account with previous matches played on Legends of Runeterra, then click the "Change User" button and enter your username. Then click "Get User" below this to make a request to the API and retrieve your account details.

If you have previously done this then it will fetch the data stored previously from Firebase.


![user-info-example](https://user-images.githubusercontent.com/64646361/234410235-fa970a4a-f5c8-47a0-a9ed-66879ef303a6.png)

Click the "Update Match History" button to retrieve the most recent 20 matches on your account. This will display the match codes.
![match-history-example](https://user-images.githubusercontent.com/64646361/234410284-4818e36c-1ceb-42cf-ba24-0a092907be8f.png)

Click "Show Match Info" to open up a pop-up that makes an API request for further detail on that specific match.
![match-info-example](https://user-images.githubusercontent.com/64646361/234410303-301baded-80b2-4b2f-ac25-9fa927631656.png)

Navigate to the Ultimate Bravery tab and click "Generate Card" under both images to come up with a new deck idea.
![ultimate-bravery-example](https://user-images.githubusercontent.com/64646361/234410317-9ae1fa91-8d3b-493f-815f-75f97b2de212.png)
