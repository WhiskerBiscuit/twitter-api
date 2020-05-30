// Import dependencies
const TwitterSDK = require('./TwitterSDK');
const generateHTML = require('./generateHTML');

module.exports = {
    getHomePage: (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(generateHTML());
    },

    getTweets: (req, res) => {
        TwitterSDK.getTweetsForHashtag('%23GermanShepherds')
            .then(TwitterSDK.filterTweets)
            .then((data) => {
                res.statusCode = 200;
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
            })
            .catch((err) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(JSON.stringify(err));
            });
    },
};
