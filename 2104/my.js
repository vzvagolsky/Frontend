let todoItems = [];

const showTodoItems = () => {
    const todoItemsListHtml = document.getElementById('todo-list-items');
    todoItemsListHtml.innerHTML = '';

    for (let item of todoItems) {
        const todoItemHtml = `
            <div class="todo-item">
                <input type="checkbox" class="todo-checkbox" data-todo-id="${item.id}" ${item.isDone ? 'checked' : ''}>
                <p class="${item.isDone ? 'done' : ''}">${item.name}</p>
                <button class="delete-todo-item" data-todo-id="${item.id}">удалить</button>
            </div>
        `;

        todoItemsListHtml.insertAdjacentHTML('beforeend', todoItemHtml);
    }

    const deleteTodoButtons = document.getElementsByClassName('delete-todo-item');

    for (let btn of deleteTodoButtons) {
        btn.addEventListener('click', (e) => {
            todoItems = deleteTodoItem(e.target.dataset.todoId);
            showTodoItems();
        });
    }

debugger;
    const todoCheckboxes = document.getElementsByClassName('todo-checkbox');

    for (let checkbox of todoCheckboxes) {
        checkbox.addEventListener('change', (e) => {
            toggleTodoItem(e.target.dataset.todoId);
            showTodoItems();
        });
    }
}

const deleteTodoItem = (id) => {
    return todoItems.filter(item => item.id.toString() !== id);
}

const toggleTodoItem = (id) => {
    todoItems.forEach(item => {
        if (item.id.toString() === id) {
            item.isDone = !item.isDone;
        }
    });
}

const addTodo = (todoName = '') => {
    const newTodo = { id: Date.now(), name: todoName, isDone: false };
    todoItems.push(newTodo);
    showTodoItems();
}

const addTodoBtn = document.getElementById('add-todo-btn');
const addTodoInput = document.getElementById('add-todo-input');
addTodoBtn.addEventListener('click', () => {
    const newTodoName = addTodoInput.value;
    if (newTodoName.trim() !== '') {
        addTodo(newTodoName);
        addTodoInput.value = '';
    }
});

showTodoItems();
		
		