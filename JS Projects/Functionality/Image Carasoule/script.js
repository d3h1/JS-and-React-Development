// CLASSES
const img = document.querySelectorAll('#imgs img')

// IDS
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('previous')
const rightBtn = document.getElementById('next')

// OTHER
let idx = 0;
let interval = setInterval(run, 2000)

// EVENTS
rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

// FUNCTIONS
function run() {
    idx++

    changeImage()
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

function changeImage() {
    // Checking if the image is at the end
    if(idx > img.length - 1) {
        idx = 0
    }
    // Checking if image is at beginning 
    else if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}