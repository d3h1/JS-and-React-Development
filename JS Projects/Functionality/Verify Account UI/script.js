// CLASSES
const codes = document.querySelectorAll('.code')

// IDS


// OTHER
// !Automatically puts the cursor in the first number
codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9) {
            setTimeout(() => {
                codes[idx + 1].focus()
            }, 1)
        }
        else if(e.key === 'Backspace') {
            setTimeout(() => {
                codes[idx - 1].focus()
            }, 1)
        }
    })
})

// EVENTS


// FUNCTIONS