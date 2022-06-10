import { list } from './list.js';

export default function deleteTodo() {
  const task = document.querySelectorAll('.task');
  const deleteBtn = document.querySelectorAll('.delete-btn');
  const move = document.querySelectorAll('.move-btn');
  const todoList = document.getElementById('todo-list');

  for (let i = 0; i < task.length; i += 1) {
    task[i].addEventListener('click', () => {
      task[i].classList.toggle('edit');
      deleteBtn[i].classList.toggle('hide');
      move[i].classList.toggle('hide');
    });
  }

  deleteBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
      const taskRemove = e.target.parentElement.parentElement.parentElement;
      const taskRemoveContent = taskRemove.firstChild.nextSibling.textContent;
      todoList.removeChild(taskRemove);

      list = list.filter((task) => task.description !== taskRemoveContent);
      for (let i = 0; i < list.length; i += 1) {
        list[i].index = i + 1;
      }
      localStorage.setItem('list', JSON.stringify(list));
    });
  });
}