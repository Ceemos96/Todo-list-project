import { list } from './list.js';

export default function editodo() {
  const task = document.querySelectorAll('.task-description');
  task.forEach((item) => {
    let previousTask = item.textContent;
    item.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const nextTask = item.textContent;
        const focusedArray = list.filter((task) => task.description === previousTask);
        list[focusedArray[0].index - 1].description = nextTask;
        previousTask = nextTask;
        localStorage.setItem('list', JSON.stringify(list));
        item.parentElement.classList.remove('edit');
        item.nextElementSibling.childNodes[0].firstChild.classList.remove('hide');
        item.nextElementSibling.childNodes[1].firstChild.classList.add('hide');
      }
    });
  });
}
