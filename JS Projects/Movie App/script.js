const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=176c613096864b7aec2f599a03c6a3b7&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=176c613096864b7aec2f599a03c6a3b7&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// Get Inital Movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showResults(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    // Get search functionality
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    }
    else {
        window.location.reload()
    }
})


function showResults(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path,vote_average,overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = 
        `
            <div class="movie">

                <img src="./movietheatre.jpg" alt="movie-bg">

                <div class="movie-info">
                    <h3>Movie Titles</h3>
                    <span class="red">9.8</span>
                </div>

                <div class="overview">
                    <h3>Overview</h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde assumenda laborum similique rem at deserunt optio labore architecto, recusandae expedita iste ratione magni, voluptate vitae aliquid ad quae culpa consectetur?
                </div>
                
            </div>
        `
    })
}