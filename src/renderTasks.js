import './taskStyles.css'

const displayTasksCard = document.querySelector('.display-tasks');

function clearTaskDisplay() {
  displayTasksCard.innerHTML = '';
}

function createTaskElement(task) {
  const taskWrapper = document.createElement('div');
  const taskTitle = document.createElement('p');
  const taskCheckbox = document.createElement('input');
  
  taskCheckbox.setAttribute('type', 'checkbox');

  taskTitle.classList.add('task-title');
  taskTitle.textContent = task.title;
  
  taskWrapper.classList.add('task-wrapper');
  taskWrapper.appendChild(taskCheckbox);
  taskWrapper.appendChild(taskTitle);

  return taskWrapper;
}

export function renderTasks(todoList) {
  clearTaskDisplay();
  todoList.forEach(task => {
    addTaskToDisplayCard(task)
  });
}

export function addTaskToDisplayCard(task) {
  displayTasksCard.appendChild(createTaskElement(task));
}