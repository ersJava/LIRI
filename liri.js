// Require
require("dotenv").config();
var Spotify = require('node-spotify-api');

// Keys
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);

// NMP
var axios = require('axios');
var moment = require('moment');
var fs = require("fs");

// Global Var
var divider = "\n-----------------------------------\n";

// Switch-Case will direct which function gets run
// switch (action) {

//     case "Artist/Band Name":
//         concertThis();
//         break;

//     case "Song":
//         spotifyThis();
//         break;

//     case "Movie":
//         movieThis();
//         break;

//     case "It Says":
//         doWhatItSays();
//         break;
// }


// Bands In Town
// concert-this <artist/band name here> ***need to make a prompt for the user to fill in inputBands
//******* not sure why it's only printing rolling stones
function concertThis() {
    var BandsKey = keys.bandsintown.id;
    var inputBands = process.argv[2];
    var bandsURL = "https://rest.bandsintown.com/artists/" + inputBands + "/events?app_id=" + BandsKey;

    axios.get(bandsURL).then(
        function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].lineup[0])
                console.log(response.data[i].venue.name);
                console.log(response.data[i].venue.city);
                console.log(moment(response.data[i].datetime).format('MM Do YYYY'));
                console.log("-------------------------------")
            }
            for (var i = 0; i < response.data.length; i++) {
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


var inputMusic = process.argv[2];
var spotifyURL = "";
// spotify-this-song '<song name here>'

spotify.search({ type: 'track', query: 'All the Small Things' })
    .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log(response.tracks.items.artists);
        }

    })
    // ,function (err, data) {
    //     if (err) {
    //         return console.log('Error occurred: ' + err);
    //     }
    // });
//response.tracks.items[i].artist[0].name


// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.





// var bandsURL = "https://rest.bandsintown.com/artists/rolling%20stones/events?app_id=1d0952ae97e032a53c96ad07febb0a29"



// { href:
//     'https://api.spotify.com/v1/search?query=All+the+Small+Things&type=track&offset=0&limit=20',
//    items:
//     [ { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 168000,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx',
//         id: '7yCPwWs66K8Ba5lFuU2bcx',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 77,
//         preview_url: null,
//         track_number: 8,
//         type: 'track',
//         uri: 'spotify:track:7yCPwWs66K8Ba5lFuU2bcx' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 168200,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/0lHWf385QpzpHulxt029L6',
//         id: '0lHWf385QpzpHulxt029L6',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 40,
//         preview_url: null,
//         track_number: 8,
//         type: 'track',
//         uri: 'spotify:track:0lHWf385QpzpHulxt029L6' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 171055,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/5uAzuQcZEufbP3NamOy2dH',
//         id: '5uAzuQcZEufbP3NamOy2dH',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 42,
//         preview_url: null,
//         track_number: 6,
//         type: 'track',
//         uri: 'spotify:track:5uAzuQcZEufbP3NamOy2dH' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 166308,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/1LZjoCST9GIznqC3CapYBC',
//         id: '1LZjoCST9GIznqC3CapYBC',
//         is_local: false,
//         name: 'All the Small Things',
//         popularity: 40,
//         preview_url:
//          'https://p.scdn.co/mp3-preview/c0946e586a6c7673db9e601e97a966280d25d680?cid=20a0317e5a8e47329661e3b5f227a050',
//         track_number: 1,
//         type: 'track',
//         uri: 'spotify:track:1LZjoCST9GIznqC3CapYBC' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 204000,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/4rHrFEePW9WTMYby9bdsUr',
//         id: '4rHrFEePW9WTMYby9bdsUr',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 44,
//         preview_url:
//          'https://p.scdn.co/mp3-preview/8a39c7a626a1c4f9e8c5717668319cbd646edca5?cid=20a0317e5a8e47329661e3b5f227a050',
//         track_number: 4,
//         type: 'track',
//         uri: 'spotify:track:4rHrFEePW9WTMYby9bdsUr' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 167946,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/6GNlT9P0NuFUplvZGH9zRo',
//         id: '6GNlT9P0NuFUplvZGH9zRo',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 35,
//         preview_url: null,
//         track_number: 8,
//         type: 'track',
//         uri: 'spotify:track:6GNlT9P0NuFUplvZGH9zRo' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 165400,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/6VR2LQT41FYZ0mRhNVoTiT',
//         id: '6VR2LQT41FYZ0mRhNVoTiT',
//         is_local: false,
//         name: 'All the Small Things',
//         popularity: 32,
//         preview_url:
//          'https://p.scdn.co/mp3-preview/6c44f4d3cea18aa2a0f7b13ceb0183e10db82ece?cid=20a0317e5a8e47329661e3b5f227a050',
//         track_number: 1,
//         type: 'track',
//         uri: 'spotify:track:6VR2LQT41FYZ0mRhNVoTiT' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 135889,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/7khwt8bxTlY0HXEMuuvtsQ',
//         id: '7khwt8bxTlY0HXEMuuvtsQ',
//         is_local: false,
//         name: 'All the Small Things',
//         popularity: 35,
//         preview_url:
//          'https://p.scdn.co/mp3-preview/fa6af7d1104fb2bab909409a5eac6060b8121283?cid=20a0317e5a8e47329661e3b5f227a050',
//         track_number: 1,
//         type: 'track',
//         uri: 'spotify:track:7khwt8bxTlY0HXEMuuvtsQ' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 169080,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/5hUqwjVEm5ot6XIgHyo43M',
//         id: '5hUqwjVEm5ot6XIgHyo43M',
//         is_local: false,
//         name: 'All the Small Things',
//         popularity: 29,
//         preview_url:
//          'https://p.scdn.co/mp3-preview/25ea1fe0febb37abb4322be21681e1950ac15797?cid=20a0317e5a8e47329661e3b5f227a050',
//         track_number: 1,
//         type: 'track',
//         uri: 'spotify:track:5hUqwjVEm5ot6XIgHyo43M' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 173373,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/2SzhNi1sjvIz29scIuBCb3',
//         id: '2SzhNi1sjvIz29scIuBCb3',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 22,
//         preview_url: null,
//         track_number: 2,
//         type: 'track',
//         uri: 'spotify:track:2SzhNi1sjvIz29scIuBCb3' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 85500,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/1V4Teb8rFKEpvXb5l6V6z3',
//         id: '1V4Teb8rFKEpvXb5l6V6z3',
//         is_local: false,
//         name: 'All the Small Things',
//         popularity: 26,
//         preview_url:
//          'https://p.scdn.co/mp3-preview/b2d84fc88990ea1321c743e9b16fe3669af46278?cid=20a0317e5a8e47329661e3b5f227a050',
//         track_number: 12,
//         type: 'track',
//         uri: 'spotify:track:1V4Teb8rFKEpvXb5l6V6z3' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 174107,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/1MLA9Ekf41frRUzVcSpa0O',
//         id: '1MLA9Ekf41frRUzVcSpa0O',
//         is_local: false,
//         name: 'All the Small Things',
//         popularity: 31,
//         preview_url:
//          'https://p.scdn.co/mp3-preview/4bdfe978425fb2dbf43648fec6a42d6c4d3011bf?cid=20a0317e5a8e47329661e3b5f227a050',
//         track_number: 5,
//         type: 'track',
//         uri: 'spotify:track:1MLA9Ekf41frRUzVcSpa0O' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 123500,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/2de3GUpjth9EMGu3jNj17r',
//         id: '2de3GUpjth9EMGu3jNj17r',
//         is_local: false,
//         name: 'All the Small Things',
//         popularity: 28,
//         preview_url:
//          'https://p.scdn.co/mp3-preview/dc71a8317a6dd6d9f7301393dae84769e5854271?cid=20a0317e5a8e47329661e3b5f227a050',
//         track_number: 9,
//         type: 'track',
//         uri: 'spotify:track:2de3GUpjth9EMGu3jNj17r' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 168040,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/561kA2SeP0mAlYwqgDlNFX',
//         id: '561kA2SeP0mAlYwqgDlNFX',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 24,
//         preview_url: null,
//         track_number: 1,
//         type: 'track',
//         uri: 'spotify:track:561kA2SeP0mAlYwqgDlNFX' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 171066,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/5P1Gz8lkRgmRYXgV84yoBf',
//         id: '5P1Gz8lkRgmRYXgV84yoBf',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 19,
//         preview_url: null,
//         track_number: 6,
//         type: 'track',
//         uri: 'spotify:track:5P1Gz8lkRgmRYXgV84yoBf' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 170160,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/0ppzUXDqE6fxfz75r6UkTQ',
//         id: '0ppzUXDqE6fxfz75r6UkTQ',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 18,
//         preview_url: null,
//         track_number: 4,
//         type: 'track',
//         uri: 'spotify:track:0ppzUXDqE6fxfz75r6UkTQ' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 175676,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/6gGvLLwhKGRbrrq4VyMfo1',
//         id: '6gGvLLwhKGRbrrq4VyMfo1',
//         is_local: false,
//         name: 'All the Small Things',
//         popularity: 22,
//         preview_url:
//          'https://p.scdn.co/mp3-preview/7c0fd10e3599b581aecbac9478018dc0e12fd9e4?cid=20a0317e5a8e47329661e3b5f227a050',
//         track_number: 1,
//         type: 'track',
//         uri: 'spotify:track:6gGvLLwhKGRbrrq4VyMfo1' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 167613,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/1v9yUlYhxqvo2NobGxuf0b',
//         id: '1v9yUlYhxqvo2NobGxuf0b',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 20,
//         preview_url: null,
//         track_number: 2,
//         type: 'track',
//         uri: 'spotify:track:1v9yUlYhxqvo2NobGxuf0b' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 167066,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/2m1hi0nfMR9vdGC8UcrnwU',
//         id: '2m1hi0nfMR9vdGC8UcrnwU',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 29,
//         preview_url: null,
//         track_number: 8,
//         type: 'track',
//         uri: 'spotify:track:2m1hi0nfMR9vdGC8UcrnwU' },
//       { album: [Object],
//         artists: [Array],
//         available_markets: [Array],
//         disc_number: 1,
//         duration_ms: 168413,
//         explicit: false,
//         external_ids: [Object],
//         external_urls: [Object],
//         href: 'https://api.spotify.com/v1/tracks/7hq5tgZJLTTFsgnxXU5Np8',
//         id: '7hq5tgZJLTTFsgnxXU5Np8',
//         is_local: false,
//         name: 'All The Small Things',
//         popularity: 13,
//         preview_url: null,
//         track_number: 15,
//         type: 'track',
//         uri: 'spotify:track:7hq5tgZJLTTFsgnxXU5Np8' } ],
//    limit: 20,
//    next:
//     'https://api.spotify.com/v1/search?query=All+the+Small+Things&type=track&offset=20&limit=20',
//    offset: 0,
//    previous: null,
//    total: 433 }
