import './styles.css';
import { addTask, buildProject, deleteProject, getTodoList } from './buildProjects';
import { projectList } from './projectList';
import { displayTasksCard, renderTasks } from './renderTasks';
import { buildTask, changeCompleted, deleteTask, showTaskInfo } from './task';

const addTaskButton = document.querySelector('.add-tasks');
const sideBar = document.querySelector('.sidebar');

const homeProject = {
  projectName: 'Home',
  todoList: [],
  uniqueID: crypto.randomUUID(),
};
const todayProject = {
  projectName: 'Today',
  todoList: [],
  uniqueID: crypto.randomUUID(),
};
const weekProject = {
  projectName: 'Week',
  todoList: [],
  uniqueID: crypto.randomUUID(),
};

let currentProject = homeProject;

//! Delete this
const task = {
  title: 'Delete this later',
  duDate: '00/00/0000',
  notes: 'Also Remember to Delete this later',
}

const task2 = {
  title: '2 Delete this later',
  duDate: '01/01/0001',
  notes: '2 Also Remember to Delete this later',
}


addTask(homeProject, task);
addTask(homeProject, task2);
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
    console.log(currentProject);
    renderTasks(getTodoList(currentProject));
  }
  else if (event.target.classList.contains('project-section')) {
    buildProject();
  }
  else if (event.target.parentNode.parentNode.classList.contains('project-nav-items')) {
    deleteProject(event.target.parentNode.parentNode.id);
    currentProject = homeProject;
    renderTasks(getTodoList(currentProject));
  }
  //! Delete this later
  else if (event.target.textContent === 'yo') {
    console.log(projectList.getProjectList());
  }
});

addTaskButton.addEventListener('click', () => {
  buildTask(currentProject);
});

// Todo: Use JS to check if the checkbox is checked if it is checked set completed to true else set it to false
// TODO: After that make the task grey (like the text color) maybe implement a strike through style?

displayTasksCard.addEventListener('click', (event) => {
  if(event.target.type === 'checkbox') {
    // TODO: Change the tasks 'completed' property to the opposite it is now
    const taskID = event.target.parentNode.id;
    // console.log(currentProject);
    changeCompleted(getTodoList(currentProject), taskID);
  }
  else if (event.target.parentNode.classList.contains('trash-icon')) {
    deleteTask(currentProject, event.target.parentNode.parentNode.id)
  }
  else if(event.target.classList.contains('task-wrapper')) {
    showTaskInfo(currentProject, event.target.id);
  }
  else if(event.target.classList.contains('task-title')) {
    showTaskInfo(currentProject, event.target.parentNode.id);
  }
});