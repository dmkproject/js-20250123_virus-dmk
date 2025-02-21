import SortableTableV1 from '../../05-dom-document-loading/2-sortable-table-v1/index.js';

export default class SortableTableV2 extends SortableTableV1 {
  element;

  constructor(headersConfig, {
    data = [],
    sorted = {}
  } = {}, isSortLocally = false) {
    
    super(headersConfig, data);
    this.isSortLocally = isSortLocally;
    this.createListeners();
  }

  sort () {
    if (this.isSortLocally) {
      this.sortOnClient();
    } else {
      this.sortOnServer();
    }
  }

  sortOnClient() {
    
  }

  sortOnServer() {
    //@TODO
  }

  createListeners() {

  }

  removeListeners() {

  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
    this.removeListeners();
  }
}
