// CLASSES


// IDS
const pokeContainer = document.getElementById('poke-container')


// OTHER
const pokemonCount = 150
const colors = {
    fire: '#F38466',
    grass: '#98d7a5',
    electric: '#9FEB71',
    water: '#71DCEB',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#DEFD30',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
}
const mainTypes = Object.keys(colors)

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
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')
    const pokeTypes = pokemon.types.map(type => type.type.name)
    const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
    const typeProper = type[0].toUpperCase() + type.slice(1)
    const color = colors[type]
    
    pokemonEl.style.backgroundColor = color

    const pokemonCards = 
    `
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: ${typeProper}</small>
    </div>
    `

    pokemonEl.innerHTML = pokemonCards
    pokeContainer.appendChild(pokemonEl)
}

fetchPokemons()