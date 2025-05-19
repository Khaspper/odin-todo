//! Legacy code might need later?

// export function makeProject(name) {
//   const projectName = name;
//   const todoList = [];

//   function getProjectName() {
//     return projectName;
//   }

//   function printTodoList() {
//     for (const tasks of todoList) {
//       console.log(tasks);
//     }
//     console.log('Done!');
//   }
  
//   function addTask(title, dueDate='00/00/0000', notes='Temp') {
//     todoList.push ({
//       title,
//       dueDate,
//       notes,
//     });
//   }

//   function getTodoList() {
//     return todoList;
//   }

//   return { printTodoList, getProjectName, addTask, getTodoList }
// }

//! Legacy code might need later?

// * This is being used in index.js
export function makeProject(name) {
  return {
    projectName: name,
    todoList: []
  }
};

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
  project.todoList.push ({
    title,
    dueDate,
    notes,
    completed: false,
    uniqueID: crypto.randomUUID(),
  });
};

export function getTodoList(project) {
  return project.todoList;
}