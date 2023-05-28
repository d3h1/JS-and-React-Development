// CLASSES


// IDS
const range = document.getElementById('range')

// OTHER


// EVENTS
range.addEventListener('input', (e) => {
    // !THE + converts this to a num
    const value = +e.target.value
    const label = e.target.nextElementSibling

    // This is to make the number go with slider(thumb) do not need this to make it static
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    

    label.innerHTML = value
})

// FUNCTIONS