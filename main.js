const movieForm = document.querySelector("#form");
const movieInput = document.querySelector("#input");
const movieSelect = document.querySelector("#select");
const movieOta = document.querySelector("#moviesWrapper");

function renderMovies(kino) {
    movieOta.innerHTML = "";
    kino.slice(0, 40).forEach(objectlar => {
        const newItem = document.createElement("li");
        newItem.className = "w-[400px] bg-[#fff] rounded-xl flex flex-col items-center p-[20px] gap-[20px]";
        newItem.innerHTML = `
            <img class="w-[400px] h-[230px]" src="${objectlar.ImageURL}" alt="${objectlar.Title}">
            <h2 class="text-balck">${objectlar.Title}</h2>
            <div>
                <span class="text-black">${objectlar.imdb_rating}</span> ||
                <span class="text-black">${objectlar.movie_year}</span> ||
                <span class="text-black">${objectlar.runtime}</span>
            </div>
            <p class="text-black">${objectlar.Categories}</p>
            <button class="bg-[#ff0000] text-[#fff] rounded px-[20px] py-[10px]">Add to watchlist</button>
        `;
        movieOta.appendChild(newItem);
    });
}

renderMovies(movies);

movieForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputQitmati = movieInput.value.toLowerCase();

    let filteredMovies = movies.filter(movie =>
        movie.Title && typeof movie.Title === "string" && movie.Title.toLowerCase().includes(inputQitmati)
    );

    if (movieSelect.value === "A-Z") {
        filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (movieSelect.value === "Z-A") {
        filteredMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    renderMovies(filteredMovies);
});

movieSelect.addEventListener("change", () => {
    const inputQitmati = movieInput.value.toLowerCase();

    let filteredMovies = movies.filter(movie =>
        movie.Title && typeof movie.Title === "string" && movie.Title.toLowerCase().includes(inputQitmati)
    );

    if (movieSelect.value === "A-Z") {
        filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (movieSelect.value === "Z-A") {
        filteredMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    renderMovies(filteredMovies);
});
