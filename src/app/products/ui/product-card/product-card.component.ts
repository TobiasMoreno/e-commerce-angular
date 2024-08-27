import { Component, input, output } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.css', './add-cart.css'] 
})
export class ProductCardComponent {
  product = input.required<Product>();

  addToCart = output<Product>();

  add(){
    this.addToCart.emit(this.product())
  }
}
