# German Shepherds Sample Twitter Search API Results
This project is designed to showcase a Twitter search API call and display some of the resulting data.
The hashtag being searched is currently hard-coded but it can be easily updated to take in a query parameter if desired.

## Prerequisites
- It is assumed that a recent version of Node.js is installed on your machine.
- A valid Twitter API OAuth2 Bearer token will be required.

## Setup and Execution
- Clone this repo to a folder on your local machine.
- Run `npm install` from the project root to install necessary dependencies.
- Run the `build` NPM script to build a production bundle to the `./build` folder.
- Open `./server/TwitterSDK.js` and on line `2` replace `ADD_BEARER_TOKEN` with a valid Twitter API Oauth2 Bearer token string.
  - See https://developer.twitter.com/en/docs/basics/authentication/oauth-2-0/bearer-tokens for more information on creating a token.
- Run `node server.js` from the project root to start the web server.  This will serve the static production files in the `./build` folder.
- Open a web browser to `http://localhost:8080` to load the application which will automatically call out to get `#GermanShepherds` related tweets.

## Browser Support
Tested on Chrome, Edge and Firefox (sorry Safari).

## Tests
Run the `test` NPM script to execute unit tests.
