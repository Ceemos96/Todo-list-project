/* eslint-disable no-unused-vars */
import updateDom from './modules/display.js';
import './styles.css';
import addTasks from './modules/UI.js';
import deleteTodo from './modules/delete.js';
import editTodo from './modules/edit.js';

addTasks();
updateDom();
deleteTodo();
editTodo();