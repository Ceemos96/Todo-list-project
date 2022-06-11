import Item from './item.js';
import { list } from './list.js';
import updateDom from './display.js';
import deleteTodo from './delete.js';
import editTodo from './edit.js';

const updateList = () => {
  const todoList = document.getElementById('todo-list');
  const input = document.querySelector('.todo-input');
  const todoInput = input.value;
  todoList.innerHTML = '';
  if (todoInput) {
    const task = new Item(todoInput, false, list.length + 1);
    list.push(task);
    updateDom();
    deleteTodo();
    editTodo();
    input.value = '';
    localStorage.setItem('list', JSON.stringify(list));
  }
};

const confirmEntry = (e) => {
  if (e.key === 'Enter') {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    updateList();
  }
};

export default function addTasks() {
  const inputField = document.querySelector('.todo-input');
  inputField.addEventListener('keydown', (e) => confirmEntry(e));
}