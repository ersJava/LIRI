# LIRI

## About the app:

LIRI will perform an assortment of functions on the command line in the terminal

**To get started:**

* Type in node liri in the command line. A set an instructions will pop up to show you the different functions of LIRI.

![intro screenshot](/images/Intro.png)

* To search you will need to type in the command line, node liri "selected command", followed by search term in quotations marks.

The multiple functions are performed from the case switch statements.

* Here is an example of the **concertThis()** function in action: _node liri concert-this "Rolling Stones"_

![concert this example](/images/concert_this_example1.png)

The return results will give you the Line-Up, venue, city and date of the show provided by moments.js 

* Here is an example of the **spotifyThis()** function in action: _node liri spotify-this "Never Gonna Give You Up"_

![concert this example](/images/spotify_this_example.png)

The return results will give you the artist, song title, a preview URL and album name. 

If a song title is not entered, spotify-this will automatically give you _Sheena Easton, "For Your Eyes Only"_.

* Here is an example of the **movieThis()** function in action: _node liri movie-this "The Dark Knight"_

![concert this example](/images/movie_this_example.png)

The return results will give all the basic information about the movie along with a short plot summary. 

If a movie is not chosen, movie-this will automatically suggest _"If you are looking for a classic 90s, feel good movie, you should watch The Goonies!"_ and give you the movie results for The Goonies. 

* **doWhatItSays()** function coming soon!

## API Keys

The API used to make this application are Spotify, Bands In Town and OMDB. The API Keys are stored in .env

## log.txt

fs.appendFile is logging all the data from the terminal and outputting the data to the log.txt and does not overwrite the file each time a command is run.







