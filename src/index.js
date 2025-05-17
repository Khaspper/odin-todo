import './styles.css';
import { makeProject } from './buildProjects';
import { projectList } from './projectList';
import { renderTasks } from './renderTasks';

const addTaskButton = document.querySelector('.add-tasks');
const sideBar = document.querySelector('.sidebar');

const homeProject = makeProject('Home Testing');
const todayProject = makeProject('Today');
const weekProject = makeProject('Week');

let currentProject = homeProject;

sideBar.addEventListener('click', (event) => {
  if (event.target.textContent in projectList.getProjectList()) {
    currentProject = projectList.getProject(event.target.textContent);
    renderTasks(currentProject.getTodoList());
  }
});

//? Use later
// addTaskButton.addEventListener('click', () => {
//   console.log(console.log(renderTasks(currentProject.getTodoList())));
// });