const movies = [
    {title: 'Movie1', genre: 'Action'},
    {title: 'Movie2', genre: 'Drama'},
    {title: 'Movie3', genre: 'Comedy'},
    {title: 'Movie4', genre: 'Historical'}
]

//const movieTitles = movies.map( (movie) =>  movie.title);                                           //Мапване единично поле
//console.log(movieTitles);

//const movieDescr = movies.map( (movie) =>  ` ${movie.title} - ${movie.genre} `);                    //Мапване на всички
//console.log(movieDescr);

//const movieDescr = movies.map( (movie, index) =>  ` ${index+1}. ${movie.title} - ${movie.genre} `); //Мапване на всички + index от array-я
//console.log(movieDescr);


//const actionMovies = movies.filter((movie)=> movie.genre=='Action');                                //Филтър определени
//console.log(actionMovies);

const actionMoviesMap = movies
.filter((movie)=> movie.genre=='Action')
.map( (movie, index) =>  ` ${index+1}. ${movie.title} - ${movie.genre} `);                                //Филтър и мап
console.log(actionMoviesMap);