import { Component, effect, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports : [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles : ``,
  providers: [ProductDetailStateService]
})
export default class ProductDetailComponent {
  
  productDetailState = inject(ProductDetailStateService).state;

  id = input.required<string>()
  constructor() {
    effect(() => {
        this.productDetailState.getById(this.id())
    })
  }
}
