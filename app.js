var idCount = 0;
var todos = []



function addTodo() {
    var inpVal = document.getElementById('inp')
    
    todos.push({
        id: idCount,
        title: inpVal.value
    })
    
    render()
}



function render() {
    var todoElem = document.getElementById('todos')
    todoElem.innerHTML = "";
    for (i = 0; i < todos.length; i++) {
        var elem = document.createElement('div');
        var textElem = document.createElement('p')
        var deleteButton = document.createElement('button');
        var updateButton = document.createElement('button');

        deleteButton.textContent = "Delete";
        updateButton.textContent = "Update"
        textElem.textContent = todos[i].title



        elem.setAttribute("id", todos[i].id);
        deleteButton.setAttribute("onclick", `deleteTodo(${todos[i].id})`)

        updateButton.setAttribute("onclick", `updateTodo(${todos[i].id})`)

        elem.appendChild(textElem)
        elem.appendChild(deleteButton)
        elem.appendChild(updateButton)
        todoElem.appendChild(elem)

        

    }
    idCount++;

}

function deleteTodo(id) {

    todos = todos.filter(todo => todo.id !== id);

    render()
}

function updateTodo(id) {
    var newTitle = prompt("Enter the updated todo:");

    if (newTitle.trim() === "") {
        alert("Updated Todo cannot be empty!");
        return;
    }

    // Find and update the specific todo item by ID
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, title: newTitle };
        }
        return todo;
    });

    render(); // Re-render the list to reflect the updated todo
}
