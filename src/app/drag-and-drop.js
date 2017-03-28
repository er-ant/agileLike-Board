import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';

export class DragAndDrop {
  constructor(tableObject) {
    this.table = tableObject;
  }

  init() {
    $('[drag=true]').draggable({ containment: '#body-board' });

    $('[drop=true]').droppable({
      drop: (event, ui) => {
        // TODO
        // AJAX will be here
        // ui.draggable.attr('id') - id of the deal
        // event.target.id - droparea id
        this.table.tBody.refreshDealStatus({ id: +ui.draggable.attr('id'),
          status: event.target.id });
        this.table.element.appendChild(this.table.tBody.element);
        this.init();
      }
    });
  }
}
