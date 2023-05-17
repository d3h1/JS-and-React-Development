const counters = document.querySelectorAll('.counter')

// Loop through the node list we just created with query selector all
counters.forEach(counter => {
    counter.innerText = '0'

    // Update counter will allow each number to get updated by the data-target declared in the html
    const updateCounter = () => {
        // + is what makes this a number
        const target = +counter.getAttribute('data-target')
        // + again makes this a number, and gets rid of string
        const c = +counter.innerText 

        // increment needs to be divided by a certain number, in this case 200 but as you increase that number it can make the counter slower
        const increment = target / 300

        // the c or rather the number it self needs to be smaller than the target in order to output this in a counter standard
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
        else {
            counter.innerText = target
        }
    }

    updateCounter()
})