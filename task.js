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

export function tasks() {
  return { 
    checkbox: createCheckbox(),
    dueDate: createDueDate(), 
    notes: createNotes(),
    title: '' 
  };
}