async function addTodo() {
    const title = document.getElementById('title').value;

    await fetch('db-insert.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });

    document.getElementById('title').value = '';
    loadTodos();
}
document.addEventListener('DOMContentLoaded', loadTodos);

async function loadTodos() {
    const response = await fetch('db-select.php');
    const todos = await response.json();

    const list = document.getElementById('todo-list');
    list.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        list.appendChild(li);
    });
}
