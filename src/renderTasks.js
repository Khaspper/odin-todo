import './taskStyles.css'

export const displayTasksCard = document.querySelector('.display-tasks');

function clearTaskDisplay() {
  displayTasksCard.innerHTML = '';
}

function createTrashIconSVG() {
  const svgNS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'trash-icon');
  svg.setAttribute('width', '2rem');
  svg.setAttribute('height', '2rem');
  svg.setAttribute('viewBox', '0 0 30 30');

  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('fill', 'white');
  path.setAttribute('d', 'M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z');

  svg.appendChild(path);
  return svg;
}

function createTaskElement(task) {
  const taskWrapper = document.createElement('div');
  const taskTitle = document.createElement('p');
  const taskCheckbox = document.createElement('input');
  const trashIcon = createTrashIconSVG();
  
  taskCheckbox.setAttribute('type', 'checkbox');

  taskTitle.classList.add('task-title');
  taskTitle.textContent = task.title;
  
  taskWrapper.classList.add('task-wrapper');
  taskWrapper.id = task.uniqueID;

  taskWrapper.appendChild(taskCheckbox);
  taskWrapper.appendChild(taskTitle);
  taskWrapper.appendChild(trashIcon);

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