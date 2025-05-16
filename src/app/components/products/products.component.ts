import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-products',
  imports: [FormsModule, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 search: string = '';

 products = [
    { id: 1, name: 'Laptop', price: 45000, quantity: 5, img:"https://cdn.mos.cms.futurecdn.net/UbMJMVGeKd2UvjMvkZZPX6.jpg"},
    { id: 2, name: 'Mouse', price: 25, quantity: 1, img:"https://i5.walmartimages.com/seo/HP-Wired-Gaming-Mouse-LED-RGB-Backlit-Adjustable-6200-DPI-Ergonomic-USB-Mice-for-Gamers-G360_612c9041-012b-4c10-9cb6-66fc1879ead6.97793d725bec60998a9b955cef3b91d0.png" },
    { id: 3, name: 'Iphone 14', price: 35000, quantity: 0, img:"https://www.dxomark.com/wp-content/uploads/medias/post-125834/Apple-iPhone-14_FINAL_featured-image-packshot-review-1024x691.jpg" },
    {
    id: 4,
    name: 'Keyboard',
    price: 45,
    quantity: 3,
    img: 'https://s.alicdn.com/@sc04/kf/H00002eb3d8be493c85cdea4453bd01740.jpg_720x720q50.jpg'
  }
  ];


 get filteredMovies() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.search.toLowerCase())
    );
}
}
