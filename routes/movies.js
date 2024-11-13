var express = require('express');
var router = express.Router();
var fetch =require("node-fetch")

const apiKey = process.env.API_KEY

//lien API : https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        res.json({movies: data.results})
    })

})

module.exports = router;