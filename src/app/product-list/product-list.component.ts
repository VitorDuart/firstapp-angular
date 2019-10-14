import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
    var p = document.createElement('p');
    p.textContent='Olá mundo com Angular';
    document.querySelector('body').appendChild(p);
  }

  onNotify(){
    window.alert("Você será notficado sobre esse produto");
  }
}