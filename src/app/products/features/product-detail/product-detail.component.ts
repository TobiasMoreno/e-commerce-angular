import { Component, effect, ElementRef, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService],
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductDetailStateService).state;
  cartState = inject(CartStateService).state;

  id = input.required<string>();

  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }

  addToCart() {
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    });
  }
  buyProduct(){
    this.addToCart()
  }
}
