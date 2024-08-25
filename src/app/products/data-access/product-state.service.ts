import { inject, Injectable } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './product.service';
import { map } from 'rxjs';

interface State {
  products: Product[];
  status: 'Loading' | 'Success' | 'Error';
}
@Injectable()
export class ProductStateService {
  private productsService = inject(ProductsService);

  private initialState: State = {
    products: [],
    status: 'Loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.productsService
        .getProducts()
        .pipe(map((products) => ({ products, status: 'Success' as const }))),
    ],
  });
}
