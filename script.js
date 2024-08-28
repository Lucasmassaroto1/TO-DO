document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Adiciona evento de clique para riscar a tarefa
        taskItem.addEventListener('click', () => {
            taskItem.style.textDecoration = taskItem.style.textDecoration === 'line-through 2px black' 
                ? 'none' 
                : 'line-through 2px black';
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => {
            taskList.removeChild(taskItem);
        };

 taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
});
