import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductInterface} from "../models/product.interface";

const PRODUCT_MAPPING = '/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public createProduct(product: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(PRODUCT_MAPPING, product, httpOptions);
  }


  public getAllProducts(product: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(PRODUCT_MAPPING, product, httpOptions);
  }


  public getProductById(productId: string): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(PRODUCT_MAPPING + "/" + productId, httpOptions);
  }

  public deleteProduct(productId: string): Observable<String> {
    return this.http.delete(PRODUCT_MAPPING + "/" + productId, {responseType: 'text'});
  }

  public updateProduct(product: ProductInterface): Observable<ProductInterface> {
    return this.http.put<ProductInterface>(PRODUCT_MAPPING, product, httpOptions);
  }

}
