import { TableHead } from './table-head';
import { TableBody } from './table-body';

export class Table {
  constructor(data, statuses) {
    let statusesArray = statuses.split(' ');
    this.element = document.createElement('table');
    this.element.setAttribute('class', 'agileLike-board');

    this.tHead = new TableHead(data, statusesArray);
    this.element.appendChild(this.tHead.element);

    this.tBody = new TableBody(data, statusesArray);
    this.element.appendChild(this.tBody.element);
  }
}
