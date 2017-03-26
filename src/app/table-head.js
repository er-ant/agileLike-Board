export class TableHead {
  constructor(data, statuses) {
    this.data = {};
    this.element = document.createElement('thead');
    this.statuses = statuses;

    this.parseData(data);

    this._buildHeader();
  }

  parseData(data) {
    let count = 0;

    this.statuses.forEach(status => {
      count = 0;

      data.forEach(deal => {
        if(deal.status == status) {
          count++;
        }
      });

      this.data[status] = count;
    });
  }

  theadTemplate(status) {
    return `
      <th>${status}
        <span class="count">${this.data[status]}</span>
      </th>
    `;
  }

  _buildHeader() {
    let headers = '';

    this.statuses.forEach(status => {
      headers += this.theadTemplate(status);
    });

    this.element.innerHTML = headers;
  }
}
