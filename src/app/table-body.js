export class TableBody {
  constructor(data, statuses) {
    this.element = document.createElement('tbody');
    this.statuses = statuses;

    this.buildBody(data);
  }

  _tDealTemplate(deal) {
    return `
      <div id="deal-${deal.id}" class="deal ${this._callStatus(deal)}" draggable="true" ondragstart="table.drag(event)">
        <p class="deal-header">
          <a class="deal-link" href="${deal.projLink}" target="_blank">
            <strong>${this._dealNameShorter(deal.projName)}</strong>
          </a>
        </p>
        <p class="deal-attributes">
          <b>Клиент</b>: ${deal.customer}<br>
          <b>Страна</b>: ${deal.country}<br>
        </p>
        <p class="deal-assigned-manager">
          <b>Менеджер</b>: ${deal.manager}<br>
          <b>В статусе</b>: ${deal.inStatus}<br>
        </p>
      </div>
    `;
  }

  _callStatus(deal) {
    if(deal.contact == 'tomorrow') {
      return 'intime';
    } else {
      return 'overdue';
    }
  }

  _dealNameShorter(name) {
    if(name.length > 85) {
      name = name.slice(0, 90);
      name = name.slice(0, name.lastIndexOf(' '));
      name += '...';
      return name;
    }
    return name;
  }

  buildBody(data) {
    let cells = {};
    let row = document.createElement('tr');

    this.statuses.forEach(item => {
      cells[item] = document.createElement('td');
      cells[item].setAttribute('class', 'deal-status-col');
      cells[item].setAttribute('ondrop', 'table.drop(event)');
      cells[item].setAttribute('ondragover', 'table.allowDrop(event)');
    });

    data.forEach(deal => {
      let divContainer = document.createElement('div');
      divContainer.innerHTML = this._tDealTemplate(deal);
      cells[deal.status].appendChild(divContainer.childNodes[1]);
    });

    Object.keys(cells).map((objectKey, index) => {
      let value = cells[objectKey];
      row.appendChild(value);
    });

    this.element.appendChild(row);
  }

}
