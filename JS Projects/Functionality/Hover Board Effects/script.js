// CLASSES


// IDS
const container = document.getElementById('container')

// OTHER
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

// EVENTS
for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => clearColor(square))

    container.appendChild(square)
}

// FUNCTIONS
function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function clearColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d, 0 0 10px #1d1d1d`

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}