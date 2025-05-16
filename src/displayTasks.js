const displayCard = document.querySelector('.display-tasks');

function clearDisplayCard() {
  displayCard.innerHTML = '';
}

export function displayTasks(todoList) {
  // clearDisplayCard();
  for (const task of todoList){
    displayCard.appendChild(task);
  }
}