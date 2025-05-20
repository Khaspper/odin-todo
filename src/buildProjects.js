import { addTaskToDisplayCard } from "./renderTasks";
import { projectList } from "./projectList";

const dialog = document.querySelector('.create-project');
const form = document.querySelector('.project-form');
document.querySelector('.cancel-form-project')
        .addEventListener('click', () => dialog.close());

// * This is being used in index.js
export function buildProject() {
  dialog.showModal();
  let project = {
    projectName: '',
    todoList: [],
    uniqueID: crypto.randomUUID(),
  }

  form.onsubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    project.projectName = data.get('project_name');
    form.reset();
    dialog.close();
    projectList.addToProjectList(project);
    addProjectToDOM(project);
  };
};

function addProjectToDOM(project) {
  const projectSection = document.querySelector('.project-list');
  const projectName = document.createElement('li');
  
  projectName.textContent = project.projectName;
  projectName.classList.add('project-nav-items')
  
  projectSection.appendChild(projectName);
}

// * This is being used in projectList.js
export function getProjectName(project) {
  return project.projectName;
};

// Debugging
export function printTodoList(project) {
  for (const tasks of project.todoList) {
    console.log(tasks);
  }
  console.log('Done!');
};

// * This is being used in addTaskButton.js
export function addTask(project, { title, dueDate='00/00/0000', notes='' }) {
  const task = {
    title,
    dueDate,
    notes,
    completed: false,
    uniqueID: crypto.randomUUID(),
  }
  project.todoList.push(task);
  addTaskToDisplayCard(task);
};

export function getTodoList(project) {
  return project.todoList;
}