import './styles.css';
import { addTask, getTodoList, makeProject } from './buildProjects';
import { projectList } from './projectList';
import { renderTasks } from './renderTasks';
import { buildTask } from './task';

const addTaskButton = document.querySelector('.add-tasks');
const sideBar = document.querySelector('.sidebar');

const homeProject = makeProject('Home Testing');
const todayProject = makeProject('Today');
const weekProject = makeProject('Week');

let currentProject = homeProject;

//! Delete this
const task = {
  title: 'Delete this later',
  duDate: '00/00/0000',
  notes: 'Also Remember to Delete this later',
}
addTask(homeProject, task);
//! Delete this

renderTasks(getTodoList(currentProject));

//TODO: Implement this in a different file
projectList.addToProjectList(homeProject);
projectList.addToProjectList(todayProject);
projectList.addToProjectList(weekProject);


sideBar.addEventListener('click', (event) => {
  // console.log(event.target.textContent);
  if (event.target.textContent in projectList.getProjectList()) {
    currentProject = projectList.getProject(event.target.textContent);
    // console.log(currentProject);
    renderTasks(getTodoList(currentProject));
  }
  else if (event.target.textContent === 'yo') {
    console.log(projectList.getProjectList());
  }
});

addTaskButton.addEventListener('click', () => {
  buildTask(currentProject);
});