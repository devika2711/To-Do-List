const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
taskList.addEventListener('change', markAsCompleted);

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() === '') {
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  taskItem.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = '';
}

function deleteTask(event) {
  if (event.target.classList.contains('delete-btn')) {
    const taskItem = event.target.closest('.task-item');
    taskList.removeChild(taskItem);
  }
}

function markAsCompleted(event) {
  if (event.target.type === 'checkbox') {
    const taskItem = event.target.closest('.task-item');
    taskItem.classList.toggle('completed');
  }
}
