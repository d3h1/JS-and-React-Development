const body = document.body
const slides = document.querySelectorAll('.slide')
const leftbtn = document.getElementById('left')
const rightbtn = document.getElementById('right')

let activeSlide = 0;

// We add event listeners to work on click and then add then increment active slide to look at next slide
// Once incremementing, functions will play
rightbtn.addEventListener('click', () => {
    activeSlide++

    if (activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

// We add event listeners to work on click and then add then increment active slide to look at next slide
// Once incremementing, functions will play
leftbtn.addEventListener('click', () => {
    activeSlide--

    if (activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

// Set BG to background behind
setBgToBody()

// Gets set on active slide index
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// Setting active class on each div through the clicks above 
function setActiveSlide () {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
    slides[activeSlide].classList.add('active')
}

