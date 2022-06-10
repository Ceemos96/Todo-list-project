/* eslint-disable prefer-destructuring */
export default class Item {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}