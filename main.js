const movieForm = document.querySelector("#form");
const movieInput = document.querySelector("#input");
const movieSelect = document.querySelector("#select");
const movieOta = document.querySelector("#moviesWrapper");

function renderMovies(kino) {
    movieOta.innerHTML = "";

    if (kino.length === 0) {
        movieOta.innerHTML = `
            <p class="text-red-600 text-xl text-center w-full">
                Bu film topilmadi
            </p>
        `;
        return;
    }

    kino.slice(0, 40).forEach(movie => {
        const newItem = document.createElement("li");
        newItem.className =
            "w-[400px] bg-[#fff] rounded-xl flex flex-col items-center p-[20px] gap-[20px]";

        newItem.innerHTML = `
            <img class="w-[400px] h-[230px]" src="${movie.ImageURL}" alt="${movie.Title}">
            <h2 class="text-black">${movie.Title}</h2>
            <div>
                <span class="text-black">${movie.imdb_rating}</span> ||
                <span class="text-black">${movie.movie_year}</span> ||
                <span class="text-black">${movie.runtime}</span>
            </div>
            <p class="text-black">${movie.Categories}</p>
            <button class="bg-[#ff0000] text-white rounded px-[20px] py-[10px] hover:bg-green-700 transition duration-500">
                Add to watchlist
            </button>
        `;
        movieOta.appendChild(newItem);
    });
}

renderMovies(movies);

movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputQiymati = movieInput.value.toLowerCase();

    let filteredMovies = movies.filter(movie =>
        movie.Title &&
        typeof movie.Title === "string" &&
        movie.Title.toLowerCase().includes(inputQiymati)
    );

    if (movieSelect.value === "A-Z") {
        filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (movieSelect.value === "Z-A") {
        filteredMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    renderMovies(filteredMovies);
});

movieSelect.addEventListener("change", () => {
    const inputQiymati = movieInput.value.toLowerCase();

    let filteredMovies = movies.filter(movie =>
        movie.Title &&
        typeof movie.Title === "string" &&
        movie.Title.toLowerCase().includes(inputQiymati)
    );

    if (movieSelect.value === "A-Z") {
        filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (movieSelect.value === "Z-A") {
        filteredMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    renderMovies(filteredMovies);
});
