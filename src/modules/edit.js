import { list } from './list.js';

export default function editodo() {
  const task = document.querySelectorAll('.task-description');
  task.forEach((item) => {
    let previousTask = item.textContent;
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const nextTask = item.textContent;
        const focusedArray = list.filter((task) => task.description === previousTask);
        list[focusedArray[0].index - 1].description = nextTask;
        previousTask = nextTask;
        localStorage.setItem('list', JSON.stringify(list));
        item.parentElement.classList.remove('highlight');
        item.nextElementSibling.classList.remove('hidden');
        item.nextElementSibling.nextElementSibling.classList.add('hidden');
      }
    });
  });
}
