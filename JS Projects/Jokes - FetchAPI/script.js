const jokeEl  = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)


const config = {
    headers: {
        'Accept': 'application/json'
    }
};

generateJoke()

function generateJoke() {
    fetch('https://icanhazdadjoke.com/', config)
    .then((response) => response.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    });

}