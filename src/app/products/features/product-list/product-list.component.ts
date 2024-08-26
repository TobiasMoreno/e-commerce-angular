import { Component, inject } from '@angular/core';
import { ProductStateService } from '../../data-access/product-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  providers : [ProductStateService]
})
export default class ProductListComponent {
  productsState = inject(ProductStateService)

  changePage(){
    const page = this.productsState.state.page()
    this.productsState.changePage$.next(page + 1);
  }

}
