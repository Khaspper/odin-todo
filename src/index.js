import './styles.css';
import { project } from './buildProjects';
import { displayTasks } from './displayTasks';

const homeProject = project();
const todayProject = project();
const weekProject = project();
const sideBar = document.querySelector('.sidebar');

homeProject.addTask('Home Project Title Test', 'Home Project Notes Test');
homeProject.addTask('Home Project Title Test 2!!!!', 'Home Project Notes Test 2!!!!');
homeProject.addTask('Home Project Title Test 3!!!!', 'Home Project Notes Test 3!!!!');

todayProject.addTask('Today Project Title Test', 'Today Project Notes Test');
weekProject.addTask('Week Project Title Test', 'Week Project Notes Test');

//TODO: I want to display my todo's on the display card...
//TODO: so starting off I think I should do event delegation first
//TODO: So whenever they click on 'Home', 'Today', 'Week' or their other Projects
//TODO: It's will get to be displayed on the display card

//? Event delegation (Determine what project has been clicked)
sideBar.addEventListener('click', (event) => {
  if(event.target.classList.contains('home')) {
    displayTasks(homeProject.getTodoList());
  }
  else if(event.target.classList.contains('today')) {
    console.log('Today');
  }
  else if(event.target.classList.contains('week')) {
    console.log('Week');
  }
})