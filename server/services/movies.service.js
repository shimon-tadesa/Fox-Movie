
const axios = require("axios");
let apikey = 'd759a614b16c0c1c0295b4313e94aeec';// המפתח כלומר הכרטיס ביקור שלי באתר

function setApiKey(key){
    apikey = key;
}
/////// functions with axios requist to my server, name : final server

async function getTopMovies1(req,res) {
    try {
       
        let baseUrl = 'https://api.themoviedb.org/3/movie/upcoming?';// מקור המידע 
        let query = `api_key=${apikey}&language=en-US&page=1`; // מה אני רוצה וכמה ? חובה מפתח
        const response = await axios.get(baseUrl + query);
        const movies = response.data.results;
        console.log("movie loading secsess");


        res.status(200).json({ movies: movies });
    } catch (err) {
        res.status(500).json({ error: "Error getting data" });
    }
}

async function getTopMovies2(req,res) {
    try {
        // let myKey = 'd759a614b16c0c1c0295b4313e94aeec';// המפתח כלומר הכרטיס ביקור שלי באתר 
        let baseUrl = 'https://api.themoviedb.org/3/movie/popular?';// מקור המידע 
        let query = `api_key=${apikey}&language=en-US&page=2`; // מה אני רוצה וכמה ? חובה מפתח
        const response = await axios.get(baseUrl + query);
        const movies = response.data.results;
        console.log("movie loading secsess");


        res.status(200).json({ movies: movies });
    } catch (err) {
        res.status(500).json({ error: "Error getting data" });
    }
}

async function getTopMovies3(req,res) {
    try {
        // let myKey = 'd759a614b16c0c1c0295b4313e94aeec';// המפתח כלומר הכרטיס ביקור שלי באתר 
        let baseUrl = 'https://api.themoviedb.org/3/movie/top_rated?';// מקור המידע 
        let query = `api_key=${apikey}&language=en-US&page=3`; // מה אני רוצה וכמה ? חובה מפתח
        const response = await axios.get(baseUrl + query);
        const movies = response.data.results;
        console.log("movie loading secsess");


        res.status(200).json({ movies: movies });
    } catch (err) {
        res.status(500).json({ error: "Error getting data" });
    }
}


async function getTopTV1(req,res) {
    try {
        let baseUrl = 'https://api.themoviedb.org/3/tv/popular?';
        let query = `api_key=${apikey}&language=en-US&page=2`;
        const response = await axios.get(baseUrl + query);
        const tvshow = response.data.results;
        console.log("tvshow loading secsess");


        res.status(200).json({ tvshow: tvshow });
    } catch (err) {
        res.status(500).json({ error: "Error getting data" });
    }
}

async function getTopTV2(req,res) {
    try {
        
        let baseUrl = 'https://api.themoviedb.org/3/tv/on_the_air?';
        let query = `api_key=${apikey}&language=en-US&page=1`;
        const response = await axios.get(baseUrl + query);
        const tvshow = response.data.results;
        console.log("tvshow loading secsess");


        res.status(200).json({ tvshow: tvshow });
    } catch (err) {
        res.status(500).json({ error: "Error getting data" });
    }
}

async function getTopTV3(req,res) {
    try {
        let baseUrl = 'https://api.themoviedb.org/3/tv/top_rated?';
        let query = `api_key=${apikey}&language=en-US&page=3`;
        const response = await axios.get(baseUrl + query);
        const tvshow = response.data.results;
        console.log("tvshow loading secsess");


        res.status(200).json({ tvshow: tvshow });
    } catch (err) {
        res.status(500).json({ error: "Error getting data" });
    }
}






module.exports.getTopMovies1 = getTopMovies1;
module.exports.getTopMovies2 = getTopMovies2;
module.exports.getTopMovies3 = getTopMovies3;

module.exports.getTopTV1 = getTopTV1;
module.exports.getTopTV2 = getTopTV2;
module.exports.getTopTV3 = getTopTV3;

module.exports.setApiKey = setApiKey;


