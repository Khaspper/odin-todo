import { addTask } from "./buildProjects";

//* Second argument is object destructuring
export function addTaskToProject(project, { title, dueDate='00/00/0000', notes='Temp' }) {
  console.log(`Adding task to project`);
  addTask(project, title, dueDate, notes);
  console.log(project);
}

export function buildTask () {
  
}