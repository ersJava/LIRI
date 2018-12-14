// Require
require("dotenv").config();

// Keys
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);

// NMP
var Spotify = require('node-spotify-api');
var omdb = require('omdb');
var axios = require('axios');
var moment = require('moment');
var fs = require("fs");

// Global Var
var divider = "\n-----------------------------------\n";
var input = process.argv[2];
var searchTerm = process.argv[3];


// Switch-Case will direct which function gets run
switch (input) {

    case "concert-this": // node liri concert-this "Rolling Stones"
        concertThis();
        break;

    case "spotify-this": //node liri spotify-this "Never Gonna Give You Up"
        spotifyThis();
        break;

    case "movie-this":
        movieThis();
        break;

    // case "It Says":
    //     doWhatItSays();
    //     break;
}


// Bands In Town
function concertThis() {
    var BandsKey = keys.bandsintown.id;
    var bandsURL = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=" + BandsKey;

    axios.get(bandsURL).then(
        function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].lineup[0])
                console.log(response.data[i].venue.name);
                console.log(response.data[i].venue.city);
                console.log(moment(response.data[i].datetime).format('MM Do YYYY'));
                console.log("-------------------------------")

                var showDataBands = [
                    "Line-Up: " + response.data[i].lineup[0],
                    "Venue: " + response.data[i].venue.name,
                    "City: " + response.data[i].venue.city,
                    "Date: " + (moment(response.data[i].datetime).format('MM Do YYYY')),
                ].join("\n\n");
            }
            fs.appendFile("random.txt", showDataBands + divider, function (err) {
                if (err) throw err;
            });
        }
    )
}


// Spotify
function spotifyThis() {
    spotify
        .search({ type: 'track', query: searchTerm })
        .then(function (response) {
            // for (var i = 0; i < response.tracks.items.length; i++); {
            // var artist = [];
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Song Title: " + response.tracks.items[0].name);
            console.log("Preview URL: " + response.tracks.items[0].preview_url); // how do I loop all responses? 
            console.log("Album Name: " + response.tracks.items[0].album.name);
            // }

            var showDataMusic = [
                "Artist: " + response.tracks.items[0].artists[0].name,
                "Song Title: " + response.tracks.items[0].name,
                "Preview URL: " + response.tracks.items[0].preview_url, // how do I loop all responses? 
                "Album Name: " + response.tracks.items[0].album.name,
            ].join("\n\n");
            fs.appendFile("random.txt", showDataMusic + divider, function (err) {
                if (err) throw err;
            })
        }
        )
}
// If no song is provided then your program will default to "The Sign" by Ace of Base.

// ({ type: 'track', query: searchTerm })

// OMDB 
function movieThis() {
    omdb
        .get({ title: 'Saw', year: 2004 }, true, function (err, movie) {
            if (err) {
                return console.error(err);
            }

            if (!movie) {
                return console.log('Movie not found!');
            }

            console.log(movie.plot);

            // Saw (2004) 7.6/10
            // Two men wake up at opposite sides of a dirty, disused bathroom, chained
            // by their ankles to pipes. Between them lies...
        });
}




// This will output the following information to your terminal/bash window:
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.


// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!

// You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.
