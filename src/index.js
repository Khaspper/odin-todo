import './styles.css';
import { makeProject } from './buildProjects';
import { projectList } from './projectList';

const addTaskButton = document.querySelector('.add-tasks');
const homeProject = makeProject('Home');
const todayProject = makeProject('Today');
const weekProject = makeProject('Week');
projectList.addToProjectList(homeProject);
projectList.addToProjectList(todayProject);
projectList.addToProjectList(weekProject);
projectList.printProjectList();

let currentProject = homeProject;

addTaskButton.addEventListener('click', (event) => {
  console.log(console.log(currentProject.printTodoList()));
});

homeProject.addTask('Adding Home Task Test 1');
homeProject.addTask('Adding Home Task Test 2');

todayProject.addTask('Adding Today Task Test 1');

weekProject.addTask('Adding week Task Test 1');

