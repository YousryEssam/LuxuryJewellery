import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input() product!: {id:number, name:string, price:number, quantity: number, img:string}

 buy(){
  if(this.product.quantity!=0)
  {
    this.product.quantity--;
  }
  
 }
}
