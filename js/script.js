let todos = [];

function addTodo() {
    // Get input values
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    if (validateInput(todoInput.value, todoDate.value)) {
        // Add to array
        const FormTodo = { task: todoInput.value, date: todoDate.value };
        todos.push(FormTodo);

        // Display updated todos
        displayTodos();

        // Clear input fields
        todoInput.value = "";
        todoDate.value = "";
    }
}

function displayTodos() {
    // Clear existing list
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    // Display all todos
    todos.forEach((todo, _) => {
        todoList.innerHTML += `<li class="border-b border-gray-300 py-2 ">${todo.task} - <span class="text-sm text-gray-500">${todo.date}</span></li>`;
    });
}

// Mandate function for future development
function deleteTodo() { }
// Mandate function for future development
function filterTodo() { }

function validateInput(todo, date) {
    // Simple validation
    if (todo === "" || date === "") {
        alert("Please fill in both fields.");
        return false;
    }
    return true;
}