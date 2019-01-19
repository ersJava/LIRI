![Logo of the project](/images/liri.png)

# LIRI
> Language Interpretation and Recognition Interface

For music lovers and movie enthusiast who can search songs, concerts and movies with one app.

## Features

LIRI will perform an assortment of functions on the command line in the terminal. The multiple functions are performed from the case switch statements.

### To get started
Type in `node liri` in the command line. A set an instructions will pop up to show you the different functions of LIRI.

![intro screenshot](/images/Intro.png)

### Search for concerts
Type in `node liri concert-this '<your artist choice>'` in the command line. 

Below is an example of `concert-this` function in action searching the **"Rolling Stones"**. The return results will give you the Line-Up, venue, city and date of the show provided by moments.js 

![concert this example](/images/concert.png)

### Search for a song
Type in `node liri spotify-this '<your song choice>'` in the command line. 

Below is an example of `spotify-this` function in action searching **"Never Gonna Give You Up"**. The return results will give you the artist, song title, a preview URL and album name. 

![spotify this example](/images/spotify.png)

If a song title is not entered, `spotify-this` will automatically give you _Sheena Easton, "For Your Eyes Only"_.

### Search for a movie
Type in `node liri movie-this '<your movie choice>'` in the command line.

Below is an example of `movie-this` function in action searching **"The Dark Knight"**. The return results will give all the basic information about the movie along with a short plot summary. 

![movie this example](/images/movie.png)

If a movie is not chosen, `movie-this` will automatically suggest _"If you are looking for a classic 90's, feel good movie, you should watch The Goonies!"_ and give you the movie results for The Goonies. 

### log.txt
fs.appendFile is logging all the data from the terminal and outputting the data to the log.txt and does not overwrite the file each time a command is run.

## Project Details

### APIs
* Spotify API
* Bands In Town Artist Events API
* OMDB API


### Technologies Used
* Node JS
* Moments JS
* Axios

## Contributing
Pull request are welcome!

1. Would like to add a `do-what-it-says` feature. Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. 
 