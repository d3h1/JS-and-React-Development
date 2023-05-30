// CLASSES


// IDS
const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// OTHER
const todos = JSON.parse(localStorage.getItem('todos')) // Puts this into an array only way to do it is take string and parse into an array

// EVENTS
if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

// FUNCTIONS
function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText
        // Left Click causes completed
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLs()
        })
        // Right Click causes delete
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault() // Prevents the right click default whic hbrings up inspect, zoom, options like that

            todoEl.remove()
            updateLs()
        })

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLs()
    }
}

function updateLs() {
    const todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}