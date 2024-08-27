import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { ProductStateService } from '../../data-access/product-state.service';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  providers: [ProductStateService],
})
export default class ProductListComponent {
  productsState = inject(ProductStateService);
  cartState = inject(CartStateService).state;

  changePage() {
    const page = this.productsState.state.page();
    this.productsState.changePage$.next(page + 1);
  }

  addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
  }
}
