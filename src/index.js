import './styles.css';
import { makeProject } from './buildProjects';
import { projectList } from './projectList';
import { renderTasks } from './renderTasks';
import { addTaskToProject, buildTask } from './task';

const addTaskButton = document.querySelector('.add-tasks');
const sideBar = document.querySelector('.sidebar');

const homeProject = makeProject('Home Testing');
const todayProject = makeProject('Today');
const weekProject = makeProject('Week');

let currentProject = homeProject;

//TODO: Implement this in a different file
projectList.addToProjectList(homeProject);
projectList.addToProjectList(todayProject);
projectList.addToProjectList(weekProject);


sideBar.addEventListener('click', (event) => {
  // console.log(event.target.textContent);
  if (event.target.textContent in projectList.getProjectList()) {
    currentProject = projectList.getProject(event.target.textContent);
    console.log(currentProject);
  }
  else if (event.target.textContent === 'yo') {
    console.log(projectList.getProjectList());
  }
});

//? Use later
addTaskButton.addEventListener('click', () => {
  const task = buildTask();
  // addTaskToProject(currentProject, task);
});