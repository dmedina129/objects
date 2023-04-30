const favMovies = ["Titanic", "Troy", "Gladiator"];
const ol = document.querySelector("ol");
const body = document.querySelector("body");
const image = document.createElement("IMG")


const movies =  [
    {
        name: "Titanic",
        year: 1997,
        director: "James Cameron",
        picture: "https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so"
    },
    {
        name: "Troy",
        year: 2004,
        director: "Wolfgang Petersen",
        picture: "https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_.jpg"
    },
    {
        name: "Gladiator",
        year: 2000,
        director: "Ridley Scott",
        picture: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png"
    }
];


const template = movies.map(movie => `
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <img src= Picture: "${movie.picture}" alt="movie posters">
</li>
`);
ol.innerHTML = template.join('');