'use strict';

function fetchAndDisplayDailyQuote() {
    const API_URL = 'https://api.adviceslip.com/advice';

    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            const dailyQuote = data.slip.advice;
            document.querySelector("#daily_quote").innerText = dailyQuote;
        })
        .catch((error) => {
            console.error('Error fetching quote:', error);
        });
}

fetchAndDisplayDailyQuote();
setInterval(fetchAndDisplayDailyQuote, 5000);