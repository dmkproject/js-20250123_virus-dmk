import { template } from "@babel/core";

export default class SortableTable {
  element;

  constructor( // do we need to define defaul objects in arrays or is it ehough just empty {}
    headerConfig = [
      {
        id: "",
        title: "",
        sortable: false,
        sortType: "",
        template: (data = []) => "",
      },
    ],
    data = [
      {
        id: "",
        title: "",
        price: 0,
        sales: 0,
      },
    ]
  ) {
    this.headerConfig = headerConfig;
    this.data = data;
    this.element = this.createElement(this.createTemplate());
  }

  createElement(template) {
    let elem = document.createElement("div");
    elem.innerHTML = template;
    debugger;
    return elem.firstElementChild;
  }

  createHeaderTemplate() {

    return this.headerConfig.map((el) => (`<div class="sortable-table__cell" data-id="${el.id}" 
      data-sortable="${el.sortable}" data-order="${el.sortType}"><span>${el.title}</span></div>
      `)).join("");
  }

  createTableRowsTemplate() {
    
    let tableContent = [];

    for (let i of this.data) {
      tableContent.push(
        `<a href="/products/3d-ochki-epson-elpgs03" class="sortable-table__row">`
      );

      for (let j of this.headerConfig) {
        if (j.hasOwnProperty("template")) {
          tableContent.push(j.template(i.images));
          continue;
        }

        tableContent.push(`<div class="sortable-table__cell">${i[j.id]}</div>`);
      }
      
      tableContent.push(`</a>`);
    }
    console.log(tableContent.join(''));
    return tableContent.join('');

    //  return this.data.map( (item) => this.headerConfig.map( i => ( ('template' in item) ?  i.template(item.images) :
    //       (`<div class="sortable-table__cell">${item[i.id]}</div>`) ) ).join(''))`
  }

  createTemplate() {
    return `
      
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

      `;
  }

  sort(fieldValue = "title", orderValue = "desc") {
    // @Todo
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
