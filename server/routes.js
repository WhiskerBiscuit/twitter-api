const {
    getHomePage,
    getTweets,
} = require('./router');

module.exports = {
    '/': getHomePage,
    '/get-tweets': getTweets,
};
