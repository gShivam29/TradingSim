const axios = require('axios').default;

const apiKey = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/minute/2024-10-11/2024-10-11?apiKey=h21pzE0FFC7fhSdts90Z7NLiPLPZKfDj'

const res = axios.get(apiKey)
    .then(res=>{console.log(res)})
    .catch(err=>console.log(err));


async function fetchDataInArray(apiKey){
    const res = axios.get(apiKey);

    res.
}