const displayTasksCard = document.querySelector('.display-tasks');

function clearTaskDisplay() {
  displayTasksCard.innerHTML = '';
}

export function renderTasks(todoList) {
  clearTaskDisplay();
  for (const tasks of todoList) {
    console.log(tasks);
  }
}