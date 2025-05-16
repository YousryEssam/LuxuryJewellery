import { Component } from '@angular/core';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { BranchTracksComponent } from './components/branch-tracks/branch-tracks.component';
import { MoviesPageComponent } from "./components/movies-page/movies-page.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { AllProductsComponent } from "./components/all-products/all-products.component";
import { ProductsComponent } from "./components/products/products.component";

@Component({
  selector: 'app-root',
  imports: [WelcomePageComponent, BranchTracksComponent, MoviesPageComponent, ProductCardComponent, AllProductsComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LuxuryJewellery';
}
