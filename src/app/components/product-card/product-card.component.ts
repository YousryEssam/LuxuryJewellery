import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  img : string = '';
  name : string = '';
  price : number = 0;
  description : string = '';
  quantity : number = 0;
}
