document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function(event){
  if(event.key === 'Enter'){
    addTask();
  }
});

function addTask(){
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  
  if(taskText !== ''){
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', function(){
      taskSpan.parentNode.classList.toggle('completed');
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = '';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', function() {
      taskItem.classList.toggle('completed');
    });
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '';
    deleteButton.addEventListener('click', function(){
      taskList.removeChild(taskItem);
    });
    
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
  }
}
