import { inject, Injectable } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './product.service';
import { catchError, map, startWith, Subject, switchMap } from 'rxjs';

interface State {
  products: Product[];
  status: 'Loading' | 'Success' | 'Error';
  page: number;
}
@Injectable()
export class ProductStateService {
  private productsService = inject(ProductsService);

  private initialState: State = {
    products: [],
    status: 'Loading' as const,
    page: 1,
  };

  changePage$ = new Subject<number>();

  loadProducts$ = this.changePage$.pipe(
    startWith(1),
    switchMap((page) => this.productsService.getProducts(page)),
    map((products) => ({ products, status: 'Success' as const })),
    catchError(() => {
      return [{ products: [], status: 'Error' as const }];
    }),
  );

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePage$.pipe(
        map((page) => ({ page, status: 'Loading' as const })),
      ),
      this.loadProducts$,
    ],
  });
}
