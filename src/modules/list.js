/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */

export let list = JSON.parse(localStorage.getItem('list')) || [];

export default function interactive() {
  const check = document.querySelectorAll('.task-checkbox');
  check.forEach((box) => {
    box.addEventListener('change', (e) => {
      const todoText = box.nextElementSibling;
      const todoParent = todoText.parentElement;
      const checkedDescription = box.nextSibling.textContent;
      const completedTasks = list.filter((items) => items.description === checkedDescription);
      if (e.target.checked) {
        todoParent.classList.add('checked', 'completed');
        list[completedTasks[0].index - 1].completed = true;
      } else {
        todoParent.classList.remove('checked', 'completed');
        list[completedTasks[0].index - 1].completed = false;
      }
      localStorage.setItem('list', JSON.stringify(list));
    });
    const clearBtn = document.getElementById('clear-button');
    const todoList = document.querySelector('#todo-list');
    clearBtn.addEventListener('click', () => {
      const checked = document.querySelectorAll('.checked');
      if (box.checked) {
        list = list.filter((items) => items.completed !== true);
      }
      checked.forEach((task) => {
        todoList.removeChild(task);
      });
      for (let i = 0; i < list.length; i += 1) {
        list[i].index = i + 1;
      }
      return localStorage.setItem('list', JSON.stringify(list));
    });
  });
}