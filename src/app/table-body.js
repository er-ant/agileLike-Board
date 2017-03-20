export class TableBody {
  constructor(data, statuses) {
    this.element = document.createElement('tbody');
    this.statuses = statuses;

    this._buildBody(data);
  }

  tDealTemplate(deal) {
    return `
      <div class="deal ${this.callStatus(deal)}">
        <p class="deal-header">
          <a href="/${deal.projLink}" target="_blank"><strong>${deal.projName}</strong></a>
        </p>
        <p class="attributes">
          <b>Клиент</b>: ${deal.customer}<br>
          <b>Страна</b>: ${deal.country}<br>
        </p>
        <p class="assigned-manager">
          <b>Менеджер</b>: ${deal.manager}<br>
          <b>В статусе</b>: ${deal.inStatus}<br>
        </p>
      </div>
    `;
  }

  callStatus(deal) {
    if(deal.contact == 'tomorrow') {
      return 'intime';
    } else {
      return 'overdue';
    }
  }

  _buildBody(data) {
    let cells = {};
    let row = document.createElement('tr');

    this.statuses.forEach(item => {
      cells[item] = document.createElement('td');
      cells[item].setAttribute('class', 'deal-status-col');
    });

    data.forEach(deal => {
      let divContainer = document.createElement('div');
      divContainer.innerHTML = this.tDealTemplate(deal);
      cells[deal.status].appendChild(divContainer.childNodes[1]);
    });

    Object.keys(cells).map((objectKey, index) => {
      let value = cells[objectKey];
      row.appendChild(value);
    });

    this.element.appendChild(row);
  }
}
