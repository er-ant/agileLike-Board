import { dataMock, statuses } from './data';
import { Table } from './app/table';

import './assets/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  let table = new Table(dataMock, statuses);
  document.getElementById('agileLike-board-wrapper').appendChild(table.element);
});

export function allowDrop(ev) {
  // console.log('allow');
  ev.preventDefault();
}

export function drag(ev) {
  // console.log('ev.target');
  ev.dataTransfer.setData('text', ev.target.id);
}

export function drop(ev) {
  // console.log('drop');
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  if(ev.target) {
    console.log(document.getElementById(data));
    ev.target.appendChild(document.getElementById(data));
  }
}
