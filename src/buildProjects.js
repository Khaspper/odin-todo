function createCheckbox() {
  const input = document.createElement('input');
  input.type = 'radio';
  return input;
}

function createDueDate() {
  const input = document.createElement('input');
  input.type = 'date';
  return input;
}

function createNotes(notes) {
  const input = document.createElement('textarea');
  input.rows = 20;
  input.cols = 60;
  input.textContent = notes;
  return input;
}

function createTitle(title) {
  const input = document.createElement('p');
  input.textContent = title;
  return input;
}

function buildTasks(title, notes) {
  return { 
    checkbox: createCheckbox(),
    dueDate: createDueDate(), 
    notes: createNotes(notes),
    title: createTitle(title)
  };
}

function formatTask(title, notes) {
    const task = buildTasks(title, notes);
    const formatedTask = document.createElement('div');
    formatedTask.appendChild(task.checkbox);
    formatedTask.appendChild(task.dueDate);
    formatedTask.appendChild(task.notes);
    formatedTask.appendChild(task.title);
    return formatedTask;
}

export function project() {
  const todoList = [];
  function addTask(title='Placeholder Title', notes='Placeholder Notes') {
    const formatedTask = formatTask(title, notes);
    todoList.push(formatedTask);
  };
  function printList() {
    console.log('Start!')
    for (const i of todoList) {
      console.log(i);
    }
    console.log('Done!');
  };
  return { addTask, printList }
};