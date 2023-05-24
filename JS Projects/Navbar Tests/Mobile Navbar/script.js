// CLASSES
const imgContents = document.querySelectorAll('.content')
const listContents = document.querySelectorAll('nav ul li')

// IDS


// OTHER


// EVENTS
listContents.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        imgContents[idx].classList.add('show')
    })
})

// FUNCTIONS
const hideAllContents = () => {
    imgContents.forEach(content => content.classList.remove('show'))
}

const hideAllItems = () => {
    listContents.forEach(content => content.classList.remove('active'))
}