import { dataMock, statuses } from './data';
import { Table } from './app/table';

document.addEventListener('DOMContentLoaded', () => {
  let table = new Table(dataMock, statuses);
  document.getElementById('table-wrapper').appendChild(table.element);
});

export function allowDrop(ev) {
  ev.preventDefault();
}

export function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

export function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}
