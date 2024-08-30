import { Component, inject } from '@angular/core';
import { CartItmComponent } from './ui/cart-itm/cart-itm.component';
import { CartStateService } from '../shared/data-access/cart-state.service';
import { ProductItemCart } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItmComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.css',
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(productId: number) {
    this.state.remove(productId);
  }
  onIncrease(productInCart: ProductItemCart) {
    this.state.update({
      product: productInCart.product,
      quantity: productInCart.quantity + 1,
    });
  }
  onDecrease(productInCart: ProductItemCart) {
    this.state.update({
      product: productInCart.product,
      quantity: productInCart.quantity - 1,
    });
    if(productInCart.quantity <= 0 ){
      this.onRemove(productInCart.product.id)
    }
  }
}
