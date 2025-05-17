import './styles.css';
import { makeProject } from './buildProjects';
import { projectList } from './projectList';
import { renderTasks } from './renderTasks';

const addTaskButton = document.querySelector('.add-tasks');
const sideBar = document.querySelector('.sidebar');

const homeProject = makeProject('Home Testing');
const todayProject = makeProject('Today');
const weekProject = makeProject('Week');
projectList.addToProjectList(homeProject);
projectList.addToProjectList(todayProject);
projectList.addToProjectList(weekProject);

let currentProject = homeProject;

sideBar.addEventListener('click', (event) => {
  if (event.target.textContent in projectList.getProjectList()) {
    currentProject = projectList.getProject(event.target.textContent);
    renderTasks(currentProject.getTodoList());
  }
});

addTaskButton.addEventListener('click', () => {
  console.log(console.log(renderTasks(currentProject.getTodoList())));
});

homeProject.addTask('Adding Home Task Test 1');
homeProject.addTask('Adding Home Task Test 2');

todayProject.addTask('Adding Today Task Test 1');

weekProject.addTask('Adding Week Task Test 1');


//! Dude I'm so sorry I'm so sleepy I don't even know what I'm thinking 
//! here but all I know is that you need to make the Add task button work!
//! Good job dude we had to restart but what ever this code is more organized
//! and a lot better