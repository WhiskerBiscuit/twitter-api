import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    // Create container for tweet data
    const [
        tweets,
        setTweets,
    ] = useState(null);

    // Make a call to get tweets on component 'mount'
    useEffect(() => {
        fetch('http://localhost:8080/get-tweets')
            .then((data) => (data.json()))
            .then((data) => { setTweets(data); })
            .catch((e) => {
                console.error('Error fetching tweets: ', e);
                setTweets([]);
            });
    }, []);

    return (
        <section className="app">
            <h2 className="c-heading">Tweets about German Shepherds</h2>
            { (!tweets) &&
                <p className="c-message">Searching for tweets...</p>
            }
            { (tweets && !tweets.length) &&
                <p className="c-message">No tweets found.</p>
            }
            { (tweets && tweets.length) &&
                <ul className="c-list">
                    { tweets.map((tweet, idx) => (
                        <li
                            className="c-list__item c-tweet animate-in"
                            key={ tweet.created_at }
                            style={ { '--animation-order': idx } }>
                            <div className="c-tweet__header">
                                <img
                                    alt={ tweet.user_name }
                                    className="c-tweet__avatar"
                                    src={ tweet.user_image } />
                                <span className="c-tweet__name">{ tweet.user_name }</span>
                            </div>
                            <p className="c-tweet__text">{ tweet.text }</p>
                            <p className="c-tweet__created">{ tweet.created_at }</p>
                        </li>
                    )) }
                </ul>
            }
        </section>
    );
}

export default App;
