require("dotenv").config();

// NMP
var axios = require('axios');
var moment = require('moment');

// Keys
var keys = require('./keys.js');


// Bands In Town
var BandsKey = keys.bandsintown.id;

var bandsURL = "https://rest.bandsintown.com/artists/" + inputBands + "/events?app_id=" + BandsKey;
var inputBands = process.argv[2];

// concert-this <artist/band name here> ***need to make a prompt for the user to fill in inputBands
axios.get(bandsURL).then (
    function (response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log(response.data[i].lineup);
            console.log(response.data[i].venue.name);
            console.log(response.data[i].venue.city);
            console.log(moment(response.data[i].datetime).format('MM Do YYYY'));
        }
    }
)


// spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.





// var bandsURL = "https://rest.bandsintown.com/artists/rolling%20stones/events?app_id=1d0952ae97e032a53c96ad07febb0a29"