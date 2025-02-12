import { template } from "@babel/core";

export default class SortableTable {
  element;

  constructor( // do we need to define defaul objects in arrays or is it ehough just empty {}
    headerConfig = [{
    id: '',
    title: '',
    sortable: false,
    sortType: "",
    template: (data=[]) => ""
  }], 
  data = [{
    id: '',
    title: '',
    price: 0,
    sales: 0
  }]) {

    this.element = this.createElement(this.createTemplate());

  }

  createElement(template) {

    let elem = document.createElement('div');
    elem.innerHTML = template;
    return elem.firstElementChild;

  }

  createHeaderTemplate() {

    return this.headerConfig.map((el) => (`
      <div class="sortable-table__cell" data-id="${el.id}" data-sortable="${el.sortable}" data-order="${el.sortType}">
        <span>${el.title}</span>
      </div>
      `)).join('');

  }

  createTableRowsTemplate() {

    for (let ih in this.headerConfig) {
      for (let id in this.data) {
        let obj = Object.entries();
        
      }
    }


    return this.headerConfig.map( (ih) => this.data.filter( (id) => ( ih.id in id ) ) ( i.id === "t )

    }

    return `
            <a href="/products/3d-ochki-epson-elpgs03" class="sortable-table__row">
              <div class="sortable-table__cell">
                <img class="sortable-table-image" alt="Image" src="http://magazilla.ru/jpg_zoom1/246743.jpg">
              </div>
              <div class="sortable-table__cell">3D очки Epson ELPGS03</div>

              <div class="sortable-table__cell">16</div>
              <div class="sortable-table__cell">91</div>
              <div class="sortable-table__cell">6</div>
            </a>
    `

  }

  createTemplate() {
    return (`
      
      <div data-element="productsContainer" class="products-list__container">
        <div class="sortable-table">

          <div data-element="header" class="sortable-table__header sortable-table__row">
            ${this.createHeaderTemplate()}
          </div>

          <div data-element="body" class="sortable-table__body">
            ${this.createTableRowsTemplate()}

          </div>
        </div>
      </div>

      `)
  }

  sort(fieldValue = "title", orderValue = 'desc') {
    // @Todo
  }

  remove() {
    this.element.remove();
  }

  destroy () {
    this.remove(); 
  }
}

