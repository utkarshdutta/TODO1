document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
        }
    });

    todoList.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const li = event.target.parentElement;
            todoList.removeChild(li);
        } else if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.className = 'list-group-item';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-danger btn-sm';
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});

