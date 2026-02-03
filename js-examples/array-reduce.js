const numbers = [1,2,3,4,5];
const sum = numbers.reduce((total, number) => total + number, 0);   //сумира променливата number като започва от 0. 
                                                                    // Total в случая е accumulator-a
console.log(sum);


const movies = [
    {title: 'Movie1', genre: 'Action'},
    {title: 'Movie2', genre: 'Drama'},
    {title: 'Movie3', genre: 'Comedy'},
    {title: 'Movie4', genre: 'Historical'}
]

const totalCharacters = movies.reduce((total, movie)=> total + movie.title.length, 0);
console.log(totalCharacters);