let todo_li = document.getElementById('todo-container');


function getTodos() {
    let todos = localStorage.getItem('todos');
    todo_li.innerHTML = todos;
}


function addTodo(event) {
    if (event.code === 'Enter') {
        let todo = document.getElementById('todo-input').value;
        if (todo) {
            let todo_li = document.getElementById('todo-container');
            let listItem = `
        <li>
        <span><i class="fa fa-trash"></i></span> ${todo}
        </li>
        `
            todo_li.innerHTML += listItem;
            document.getElementById('todo-input').value = "";
        } else {
            alert("Enter a valid Task");
        }
        localStorage.setItem('todos', todo_li.innerHTML);
    }
}

document.querySelector("ul").addEventListener('click', (event) => {
    event.target.classList.toggle('completed');
    localStorage.setItem('todos', todo_li.innerHTML);
});


document.querySelector("ul").addEventListener('click', (event) => {

    if (event.target.tagName === 'I') {
        event.target.parentElement.parentElement.remove();
    }

    if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
    }
    localStorage.setItem('todos', todo_li.innerHTML);

});