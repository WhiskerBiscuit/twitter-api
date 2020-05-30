const https = require('https');
const BEARER_TOKEN = 'ADD_BEARER_TOKEN';

/**
 * Requests tweets for a given hashtag
 * @param {String} hashtag
 * @returns {Promise.<Array>}
 */
const getTweetsForHashtag = (hashtag) => (
	new Promise((resolve, reject) => {
		https.get(`https://api.twitter.com/1.1/search/tweets.json?lang=en&q=${hashtag}`, {
				headers: { 'Authorization': `Bearer ${BEARER_TOKEN}` }
			}, (resp) => {
				let data = '';
				resp.on('data', (chunk) => {
					data += chunk;
				});
				resp.on('end', () => {
					resolve(JSON.parse(data).statuses);
				});
			}).on('error', (err) => {
				reject(err);
			});
	})
);

/**
 * Filters tweet data for basic data points
 * @param {Array.<Object>} tweets
 * @returns {Promise.<Array>}
 */
const filterTweets = (tweets) => (
	new Promise((resolve) => {
        let responseData = [];
        if (tweets && tweets.length) {
            for (let i = 0; i < tweets.length; i++) {
                responseData.push({
                    created_at: tweets[i].created_at,
                    text: tweets[i].text,
                    user_name: tweets[i].user.name,
                    user_image: tweets[i].user.profile_image_url_https,
                });
            }
        };
        resolve(responseData);
	})
);

module.exports = {
    filterTweets,
    getTweetsForHashtag,
};
