import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product.interface';
import { BaseHttpService } from '../../shared/data-access/base-http.service';

@Injectable({ providedIn: 'root' })
export class ProductsService extends BaseHttpService {

  getProducts(page: number): Observable<Product[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`, {
      params: {
        limit: page * 5,
      },
    });
  }
  
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}
