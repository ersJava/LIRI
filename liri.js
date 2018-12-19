// Require
require("dotenv").config();


var keys = require('./keys.js');

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var omdbApi = require('omdb');
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
            fs.appendFile("log.txt", showDataBands + divider, function (err) {
                if (err) throw err;
            });
        }
    )
}


// Spotify
function spotifyThis() {
    var music = process.argv[3];
    if (!music) {
        music = "For Your Eyes Only";
    }
searchTerm = music
    spotify
        .search({ type: 'track', query: searchTerm, limit: 5 })
        .then(function (response) {

            // for (var i = 0; i < response.tracks.items.length; i++); { Tried to run a for loop for to capture the top
            // 5 responses but it would brake the code. It seems that each array/path to capture an item is different and won't
            //work in a for loop..???
            //  var artist = []; 
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Song Title: " + response.tracks.items[0].name);
            console.log("Preview URL: " + response.tracks.items[0].preview_url);
            console.log("Album Name: " + response.tracks.items[0].album.name);
            console.log("-------------------------------")
            // }


            var showDataMusic = [
                "Artist: " + response.tracks.items[0].artists[0].name,
                "Song Title: " + response.tracks.items[0].name,
                "Preview URL: " + response.tracks.items[0].preview_url,
                "Album Name: " + response.tracks.items[0].album.name,
            ].join("\n\n");
            fs.appendFile("log.txt", showDataMusic + divider, function (err) {
                if (err) throw err;
            })

        }
        )
}


// OMDB 
function movieThis() {
    var movie = process.argv[3];
    if (!movie) {
        movie = "Goonies";
        console.log("If you are looking for a classic 90s, feel good movie, check out The Goonies!")
    }
searchTerm = movie
    var movieKey = keys.omdb.id;
    var movieURL = "https://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=" + movieKey;

    axios.get(movieURL).then(
        function (response) {
            // for (var i = 0; i < response.data.length; i++) {
            // console.log(response.data[i].Title); nothing was returning
            console.log("Movie Title: " + response.data.Title);
            console.log("Movie Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country Where Movie Was Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Starring Actors: " + response.data.Actors);
            console.log("-------------------------------")

            var showDataMovie = [
                "Movie Title: " + response.data.Title,
                "Movie Release Year: " + response.data.Year,
                "IMDB Rating: " + response.data.Ratings[0].Value,
                "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
                "Country Where Movie Was Produced: " + response.data.Country,
                "Language: " + response.data.Language,
                "Plot: " + response.data.Plot,
                "Starring Actors: " + response.data.Actors,
            ].join("\n\n");
            fs.appendFile("log.txt", showDataMovie + divider, function (err) {
                if (err) throw err;
            })

            // }
        }

    )
}

