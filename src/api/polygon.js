const axios = require('axios');

async function fetchData() {
    try {
        const res = await axios.get('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/minute/2024-10-11/2024-10-11?apiKey=h21pzE0FFC7fhSdts90Z7NLiPLPZKfDj');
        console.log(res.data.results[0].o);
    } catch (error) {
        console.error(error);
    }
}

fetchData();
