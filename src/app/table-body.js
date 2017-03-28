export class TableBody {
  constructor(data, statuses) {
    this.idElement = 'body-board';
    this.statuses = statuses;
    this.data = data;

    this.element = document.createElement('tbody');
    this.element.setAttribute('id', this.idElement);

    this.buildBody(data);
  }

  _tDealTemplate(deal) {
    return `
      <div id="${deal.id}" class="deal ${this._callStatus(deal)}"
        drag="true">
        <p class="deal-header">
          <a class="deal-link" href="${deal.projLink}" target="_blank">
            <strong>${this._dealNameShorter(deal.potentialname)}</strong>
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
    if (deal.contact === 'tomorrow') {
      return 'intime';
    }

    return 'overdue';
  }

  _dealNameShorter(name) {
    if (name.length > 85) {
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
      cells[item].setAttribute('id', item);
      cells[item].setAttribute('drop', 'true');
    });

    data.forEach(deal => {
      let divContainer = document.createElement('div');
      divContainer.innerHTML = this._tDealTemplate(deal);
      cells[deal.sales_stage].appendChild(divContainer.childNodes[1]);
    });

    Object.keys(cells).forEach(objectKey => {
      let value = cells[objectKey];
      row.appendChild(value);
    });

    this.element.appendChild(row);
  }

  refreshDealStatus(movedDeal) {
    this.data = this.data.map(item => {
      if (item.id === movedDeal.id) {
        item.sales_stage = movedDeal.status;
      }
      return item;
    });

    this.refreshTable(this.data);
  }

  refreshTable(data) {
    let elem = document.getElementById(this.idElement);
    elem.parentNode.removeChild(elem);
    this.element = document.createElement('tbody');
    this.element.setAttribute('id', this.idElement);
    this.buildBody(data);
  }
}
