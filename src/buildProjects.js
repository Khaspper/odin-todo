export function makeProject(name) {
  const projectName = name;
  const todoList = [];

  function getProjectName() {
    return projectName;
  }

  function printTodoList() {
    for (const tasks of todoList) {
      console.log(tasks);
    }
    console.log('Done!');
  }
  
  function addTask(title, dueDate='00/00/0000', notes='Temp') {
    todoList.push ({
      title,
      dueDate,
      notes,
    });
  }

  function getTodoList() {
    return todoList;
  }

  return { printTodoList, getProjectName, addTask, getTodoList }
}
