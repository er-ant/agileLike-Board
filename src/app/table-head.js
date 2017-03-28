export class TableHead {
  constructor(data, statuses) {
    this.data = {};
    this.element = document.createElement('thead');
    this.statuses = statuses;

    this.parseData(data);

    this.buildHeader();
  }

  _theadTemplate(status) {
    return `
      <th>${status}
        <span class="count">${this.data[status]}</span>
      </th>
    `;
  }

  parseData(data) {
    let count = 0;

    this.statuses.forEach(status => {
      count = 0;

      data.forEach(deal => {
        if (deal.status === status) {
          count++;
        }
      });

      this.data[status] = count;
    });
  }

  buildHeader() {
    let headers = '';

    this.statuses.forEach(status => {
      headers += this._theadTemplate(status);
    });

    this.element.innerHTML = headers;
  }
}
