import { addTask, getTodoList } from "./buildProjects";
import { addTaskToDisplayCard, renderTasks } from "./renderTasks";

const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
document.querySelector('.cancel-form')
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
    addTaskToDisplayCard(task);
  };
}
