import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number,
  ){
    }
  }


class InventoryApp{
  product: Product;

  constructor(){
    this.product = new Product(
      'Bandana',
      'A ninja bandana',
      'assets/bandana.jpg',
      ['Men', 'Accessories', 'Hat'],
      29.99);
  
  }
}
