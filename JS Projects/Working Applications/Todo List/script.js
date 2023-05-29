// CLASSES


// IDS
const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// OTHER


// EVENTS
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
        todoEl.addEventListener('click', () => todoEl.classList.toggle('completed'))
        // Right Click causes delete
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault() // Prevents the right click default whic hbrings up inspect, zoom, options like that

            todoEl.remove()
        })

        todosUL.appendChild(todoEl)

        input.value = ''
    }
}