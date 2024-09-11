document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    // Carregar tarefas salvas
    loadTasks();
  
    addTaskBtn.addEventListener('click', addTask);
  
    taskInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
  
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
        saveTasks();
      };
  
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
      saveTasks();
    }
  
    function saveTasks() {
      const tasks = [];
      taskList.querySelectorAll('li').forEach(taskItem => {
        tasks.push({
          text: taskItem.textContent,
          completed: taskItem.style.textDecoration === 'line-through 2px black'
        });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.text;
        if (task.completed) {
          taskItem.style.textDecoration = 'line-through 2px black';
        }
  
        taskItem.addEventListener('click', () => {
          taskItem.style.textDecoration = taskItem.style.textDecoration === 'line-through 2px black' 
            ? 'none' 
            : 'line-through 2px black';
          saveTasks();
        });
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => {
          taskList.removeChild(taskItem);
          saveTasks();
        };
  
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
      });
    }
  });
