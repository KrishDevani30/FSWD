let movieCollection = [];

function addMovie() {
    const title = prompt("Enter the movie title:");
    const genre = prompt("Enter the movie genre:");
    const rating = parseFloat(prompt("Enter the movie rating (0-10):"));
    const releaseYear = parseInt(prompt("Enter the movie release year:"));

    const newMovie = { title, genre, rating, releaseYear };
    movieCollection.push(newMovie);
    alert(`${title} has been added to your collection!`);
    displayMovies();
}

function listMoviesByGenre() {
    const genre = prompt("Enter the genre to filter by:");
    const filteredMovies = movieCollection.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());

    displayMovies(filteredMovies);
}

function findHighestRatedMovie() {
    const highestRatedMovie = movieCollection.reduce((prev, current) => (prev.rating > current.rating) ? prev : current);
    
    alert(`Highest Rated Movie: ${highestRatedMovie.title} (${highestRatedMovie.rating})`);
}

function listAllTitles() {
    const titles = movieCollection.map(movie => movie.title).join(", ");
    alert(`Movies in your collection: ${titles}`);
}

function listMoviesAfterYear() {
    const year = parseInt(prompt("Enter the year to filter movies released after:"));
    const filteredMovies = movieCollection.filter(movie => movie.releaseYear > year);
    
    displayMovies(filteredMovies);
}

function displayMovies(movies = movieCollection) {
    const movieListDiv = document.getElementById("movie-list");
    movieListDiv.innerHTML = "";

    if (movies.length === 0) {
        movieListDiv.innerHTML = "<p>No movies found.</p>";
    } else {
        movies.forEach(movie => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");

            movieDiv.innerHTML = `
                <h3>${movie.title} (${movie.releaseYear})</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
            `;

            movieListDiv.appendChild(movieDiv);
        });
    }
}

displayMovies();
