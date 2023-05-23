// CLASSES
const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMsg = document.querySelector('.final');

// IDS
const replayBtn = document.getElementById('replay');

// EVENTS
runAnimation()

replayBtn.addEventListener('click', () => {
    resetDom()
    runAnimation()
})

// FUNCTIONS
function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1;

        num.addEventListener('animationend', (e) => {
            // This will give the number the in and out effect 
            if(e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in');
                num.classList.add('out');
            }   
            else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in');
            }
            else {
                counter.classList.add('hide')
                finalMsg.classList.add('show')
            }
        })
    })
}

function resetDom() {
    counter.classList.remove('hide')
    finalMsg.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}