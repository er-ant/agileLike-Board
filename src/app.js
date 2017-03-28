import { dataMock, statuses } from './data';
import { Table } from './app/table';
import { DragAndDrop } from './app/drag-and-drop';

import './assets/styles.scss';

export function init(incomingStatuses, data) {
  document.addEventListener('DOMContentLoaded', () => {
    let deals = data || dataMock;
    let dealsStatuses = incomingStatuses || statuses;
    let table = new Table(deals, dealsStatuses);
    let dragAndDrop = new DragAndDrop(table);

    document.getElementById('agileLike-board-wrapper').appendChild(table.element);

    dragAndDrop.init();
  });
}

