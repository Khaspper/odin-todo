import { addTask, getTodoList } from "./buildProjects";
import { renderTasks } from "./renderTasks";

const dialog = document.querySelector('.create-task');
const form = document.querySelector('.task-form');
document.querySelector('.cancel-form-task')
        .addEventListener('click', () => dialog.close());

//* Second argument is object destructuring
export function buildTask(project) {
  dialog.showModal();
  let task = {};  
  form.onsubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    task.title = data.get('task_name');
    task.dueDate = data.get('due_date');
    task.notes = data.get('notes');
    addTask(project, task);
    form.reset();
    dialog.close();
  };
}

function getTask(todoList, taskID) {
  const found = todoList.find((element) => element.uniqueID === taskID);
  return found;
}

export function changeCompleted(todoList, taskID) {
  const task = getTask(todoList, taskID)
  task.completed = !task.completed;
}

export function deleteTask(project, taskID) {
  const todoList = getTodoList(project);
  for (const index in todoList) {
    if (todoList[index].uniqueID === taskID) {
      todoList.splice(index, 1);
      renderTasks(todoList);
    }
  }
}