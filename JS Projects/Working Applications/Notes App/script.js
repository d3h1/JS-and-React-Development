
const  addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    notes.forEach(note => addNote(note))
}

addBtn.addEventListener('click',() => addNote())

function addNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note')

    note.innerHTML = 
    `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>  

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    document.body.appendChild(note)

    const editNote = note.querySelector('.edit');
    const deleteNote = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text
    main.innerHTML = marked(text)
    
    deleteNote.addEventListener('click', () => {
        note.remove();
        updateLocalStorage()
    })

    editNote.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } =  e.target // We take value and const it from e.target.value so we dont have to say e.target.value WE DECONSTRUCT IT
        main.innerHTML = marked(value)

        updateLocalStorage()
    })
}

function updateLocalStorage () {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    // WE have to use JSON stringify because we are getting an array, and you can only pass strings to local storage
    localStorage.setItem('notes', JSON.stringify(notes))
}
