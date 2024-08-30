import { Component, input, output } from '@angular/core';
import {  ProductItemCart } from '../../../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-itm',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-itm.component.html',
  styleUrl: './cart-itm.component.css'
})
export class CartItmComponent {

  productCarItem = input.required<ProductItemCart>();

  onRemove = output<number>();

  onIncrease = output<ProductItemCart>();

  onDecrease = output<ProductItemCart>();

}
