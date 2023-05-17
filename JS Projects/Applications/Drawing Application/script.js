const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const fontsize = document.getElementById('size')
const clear = document.getElementById('clear')
const fontcolor = document.getElementById('color')

let size = 10
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    // Get position of where mouse is
    x = e.offsetX
    y = e.offsetY


})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    // Set position as undefined when mouse is done drawing
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }

})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke()
}

function updateSizeOnScreen() {
    fontsize.innerText = size
}

fontcolor.addEventListener('change', (e) => {
    color = e.target.value
})

increase.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decrease.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

clear.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
})





