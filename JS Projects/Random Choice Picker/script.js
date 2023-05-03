const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// On start, the user will be immediately directed to typing their input
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    // Calling function to create the tags
    createTags(e.target.value)

    // Once enter is hit, this runs
    if(e.key === 'Enter') {
        // Clear previous input 
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        // Call function to randomly select choices given
        randomSelect()
    }
})

// !Functions Needed 
// Will create tags 
function createTags(input) {
    // Getting rid of space after or before and just leaving string and comma in the new array
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    // Clearing so that after you spell out any letter, it does not pile up
    tagsEl.innerHTML = ''

    // Gets each tag and outputs them with their tag style
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// Will select random tag
function randomSelect() {
    // This represents how many times each tag will highlight before being stopped on
    const times = 30

    // We will highlight tags at a 100 millisecond time out and at that 100 millisecond time read outs, the tags will un-highlight causing the next random tag to be picked
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        // We will highlight that random tag that we just found
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    // This will allow us to clear interval after a certain amount of times, those times being multiplied by 100 ms like the other time outs
    setTimeout(() => {
        clearInterval(interval)

        // So after  finally clearing the interval loop we just did of looping through tags, we end it with one last timeout to pick the final tag chosen randomly
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

// Will pick random tag
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    // Returning random tag based on the length of the node list we just created by calling all classes of tag above
    return tags[Math.floor(Math.random() * tags.length)]
}

// Will highlight the chosen tag
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// Will un-highlight the chosen tag
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}