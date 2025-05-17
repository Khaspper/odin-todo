const displayTasksCard = document.querySelector('.display-tasks');

function clearTaskDisplay() {
  displayTasksCard.innerHTML = '';
}

//TODO: This should not console.log() the tasks but instead 
//TODO: put it in the display-tasks-card and make it HTML
export function renderTasks(todoList) {
  clearTaskDisplay();
  for (const tasks of todoList) {
    console.log(tasks);         
  }
}