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
    const label_width = getComputedStyle(label).getPropertyValue('width')
    
    // This gets the number of the range (no px) 2 because you are taking the last two of the string off
    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    // Create MAX and MIN
    const max = +e.target.max
    const min = +e.target.min

    // Attaching the left variable to the actual label
    const left = value * (num_width / max) - (num_label_width / 2) + scale(value, min, max, 10, -10)
    label.style.left = `${left}px`

    label.innerHTML = value
})

// FUNCTIONS
// !min max function
// Keeps the label in the cneter instead of moving over to the left etc. . .
const scale = (num, in_min, in_max, out_min, out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}