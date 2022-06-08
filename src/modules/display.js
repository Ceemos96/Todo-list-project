import list from './list.js';

const displayTasks = () => {
  const todoList = document.getElementById('todo-list');
  for (let i = 0; i < list.length; i += 1) {
    // dynamically load task items from array
    const task = document.createElement('li');
    task.classList.add('task');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.id = list[i].index;
    taskCheckbox.classList.add('task-checkbox');

    const taskDescription = document.createElement('label');
    taskDescription.for = list[i].index;
    taskDescription.innerHTML = list[i].description;
    taskDescription.classList.add('task-description');

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
  }
};

export default displayTasks();