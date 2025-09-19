let todos =[];



function addTodo(){

    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    console.log("Todo:", todoInput.value);
    console.log("Date:", todoDate.value);
    if (validateInput (todoInput.value, todoDate.value)){
        console.log("Hello World");

    }
}


function displayTodos(){}

function deleteTodo(){ }

function filterTodo(){ }

function validateInput(){ 
    if (todo === "" || date === "") {
alert("Please fill in both fields.");
return false
   return true;
}
    }
