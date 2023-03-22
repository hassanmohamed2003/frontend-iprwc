import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ProductInterface} from "../models/product.interface";
import {BASE_URL} from "../app.component";

const PRODUCT_MAPPING = '/api/v1/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public createProduct(product: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(BASE_URL + PRODUCT_MAPPING, product, httpOptions);
  }


  public getAllProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(BASE_URL + PRODUCT_MAPPING);
  }


  public getProductById(productId: string): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(BASE_URL + PRODUCT_MAPPING + "/" + productId, httpOptions);
  }

  public deleteProduct(productId: string): Observable<String> {
    return this.http.delete(BASE_URL + PRODUCT_MAPPING + "/" + productId, {responseType: 'text'});
  }

  public updateProduct(product: ProductInterface): Observable<ProductInterface> {
    return this.http.put<ProductInterface>(BASE_URL + PRODUCT_MAPPING, product, httpOptions);
  }


  private buttonClicked = new BehaviorSubject<boolean>(false);

  currentbuttonClicked$ = this.buttonClicked.asObservable();

  sendButtonClicked(boolean:boolean): void{
    this.buttonClicked.next(boolean)
  }


  private selectedProduct = new BehaviorSubject<ProductInterface>({
    category: null as any,
    description: "",
    imageSrcCharacter: "",
    imageSrcCover: "",
    shortDescription: "",
    stock: 0,
    price: 0,
    name: "",
    id: ""
  })

  currentSelectedProduct$ = this.selectedProduct.asObservable();

  sendSelectedProduct(building: ProductInterface): void{
    this.selectedProduct.next(building)
  }


}
