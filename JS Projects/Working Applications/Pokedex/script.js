// CLASSES


// IDS
const pokecontainer = document.getElementById('poke-container')


// OTHER
const pokemonCount = 150
const colors = {
    fire: '#F38466',
    grass: '#DEFD30',
    electric: '#9FEB71',
    water: '#71DCEB',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
}

// EVENTS


// FUNCTIONS
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}

fetchPokemons()