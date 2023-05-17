const insertValue = document.getElementById('insert');


// !If key is space, print space, else print key
window.addEventListener('keydown', (event) => {
    insertValue.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key} 
    <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    `
})