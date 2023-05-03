const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// On start, the user will be immediately directed to typing their input
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

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

