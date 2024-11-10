const axios = require('axios').default;

const apiKey = process.env.REACT_APP_POLYGON_API_KEY

const testURL = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/minute/2024-10-11/2024-10-11?apiKey=${apiKey}';

const res = axios.get(testURL)
    .then(res=>{console.log(res)})
    .catch(err=>console.log(err));


// async function fetchDataInArray(apiKey){
//     const res = axios.get(apiKey);
// }