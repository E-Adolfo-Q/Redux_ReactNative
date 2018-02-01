
 export default (date) => {            
    const URL = `https://api.tvmaze.com/schedule?country=US&date=${date}`;
    console.log(URL);
    return fetch(URL)
    .then(response => Promise.all([response,response.json()]))    
}
