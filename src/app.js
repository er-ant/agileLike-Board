import { dataMock, statuses } from './data';
import { Table } from './app/table';

document.addEventListener('DOMContentLoaded', () => {
  let table = new Table(dataMock, statuses);
  document.getElementById('table-wrapper').appendChild(table.element);
});

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData('text', ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData('text');
//   ev.target.appendChild(document.getElementById(data));
// }

// function getTableHeader(type) {
//   return `
//             <th>${type}
//               <span class="count">7</span>
//               <span class="hours" title="Estimated time">68.00h</span>
//             </th>

//     <h2 class='name'>
//       ${window.data[0].projName}
//       <span class='author'>by ${this.author}</span>
//     </h2>
//     <button class='edit'>edit</button>
//     <button class='remove'>remove</button>
//   `;
// }

// function buildTable() {

// }

// (function() {
//   window.statuses = window.statuses.split(' ');
//   // console.log(getHeadersTemplate());
// })();

            // <th data-column-id="20">To Do
            //   <span class="count">7</span>
            //   <span class="hours" title="Estimated time">68.00h</span>
            // </th>
