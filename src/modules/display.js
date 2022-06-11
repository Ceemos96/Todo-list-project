import interactive, { list } from './list.js';

const displayUI = (item) => {
  const todoList = document.getElementById('todo-list');
  // dynamically load task items from array
  const task = document.createElement('li');
  task.classList.add('task');
  task.id = item.index;

  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.id = item.index;
  taskCheckbox.classList.add('task-checkbox');

  const taskDescription = document.createElement('label');
  taskDescription.for = item.index;
  taskDescription.innerHTML = item.description;
  taskDescription.classList.add('task-description');
  taskDescription.setAttribute('contenteditable', 'true');

  task.appendChild(taskCheckbox);
  task.appendChild(taskDescription);

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  const movebutton = document.createElement('button');
  movebutton.classList.add('move-btn');

  const moveIcon = document.createElement('i');
  moveIcon.classList.add('fas', 'fa-arrows-alt');

  movebutton.appendChild(moveIcon);

  buttons.appendChild(movebutton);

  const deletebutton = document.createElement('button');
  deletebutton.classList.add('delete-btn');

  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash-alt');

  deletebutton.appendChild(deleteIcon);

  buttons.appendChild(deletebutton);

  task.appendChild(buttons);

  todoList.appendChild(task);
};

const updateDom = () => {
  list.forEach((task) => {
    displayUI(task);
    interactive();
  });
};

export default updateDom;
