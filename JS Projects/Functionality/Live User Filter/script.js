// CLASSES


// IDS
const results = document.getElementById('result')
const filter = document.getElementById('filter')

// OTHER
const listItems = []

// EVENTS
getData()

// FUNCTIONS
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    // Clear Results
    results.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = 
        `
            <img src = "${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
    })
}