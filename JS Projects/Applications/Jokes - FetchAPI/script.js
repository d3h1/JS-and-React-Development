const jokeEl  = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)


generateJoke()

// Better practice to use ASYNC AWAIT rather than .then for promises
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
    

}



// const config = {
//     headers: {
//         'Accept': 'application/json'
//     }
// };

// generateJoke()

// function generateJoke() {
//     fetch('https://icanhazdadjoke.com/', config)
//     .then((response) => response.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     });

// }