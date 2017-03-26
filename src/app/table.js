import { TableHead } from './table-head';
import { TableBody } from './table-body';

export class Table {
  constructor(data, statuses) {
    let statusesArray = statuses.split(' ');
    this.element = document.createElement('table');
    this.element.setAttribute('class', 'agileLike-board');

    let tHead = new TableHead(data, statusesArray);
    this.element.appendChild(tHead.element);

    let tBody = new TableBody(data, statusesArray);
    this.element.appendChild(tBody.element);
  }
}
