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

function createNotes() {
  const input = document.createElement('textarea');
  input.rows = 20;
  input.cols = 60;
  return input;
}

function tasks() {
  return { 
    checkbox: createCheckbox(),
    dueDate: createDueDate(), 
    notes: createNotes(),
    title: '' 
  };
}

function formatTask(title, notes) {
    const task = tasks();
    const formatedTask = document.createElement('div');
    formatedTask.appendChild(task.checkbox);
    formatedTask.appendChild(task.dueDate);
    formatedTask.appendChild(task.notes);
    formatedTask.appendChild(task.title);
    return formatTask;
}

export function project() {
  const todoList = [];
  function addTask(title='Placeholder Title', notes='Placeholder Notes') {
    const formatedTask = formatTask(title, notes);
    todoList.push(formatedTask);
  };
  return { addTask }
};