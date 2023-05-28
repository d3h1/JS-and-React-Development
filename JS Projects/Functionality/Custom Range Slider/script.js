// CLASSES


// IDS
const range = document.getElementById('range')

// OTHER


// EVENTS
range.addEventListener('input', (e) => {
    // !THE + converts this to a num
    const value = +e.target.value
    const label = e.target.nextElementSibling

    

    label.innerHTML = value
})

// FUNCTIONS