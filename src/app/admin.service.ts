import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./models/category.interface";
import {PromoCode} from "./models/promoCode.interface";
import {BASE_URL} from "./app.component";
import {ProductInterface} from "./models/product.interface";

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http: HttpClient) {
  }

  editProduct(id: String, name: String, price: Number, stock: Number, category: Category, shortDescription: String, description: String, imageSrc: String) {
    return this.http.patch<HttpResponse<any>>(BASE_URL + '/api/v1/products/' + id, {
      id,
      name,
      price,
      stock,
      category,
      shortDescription,
      description,
      imageSrc
    })
  }

  editCategory(id: String, name: String) {
    return this.http.patch<HttpResponse<any>>(BASE_URL + '/api/v1/categories/' + id, {id, name})
  }

  editPromoCode(id: String, name: String, korting: Number) {
    return this.http.patch<HttpResponse<any>>(BASE_URL + '/api/v1/promocodes/' + id, {id, name, korting})
  }

  createProduct(name: String, price: Number, stock: Number, category: Category, shortDescription: String, description: String, imageSrc: String) {
    return this.http.post<ProductInterface>(BASE_URL + '/api/v1/products', {
      name,
      price,
      stock,
      category,
      shortDescription,
      description,
      imageSrc
    })
  }

  createCategory(name: String) {
    return this.http.post<Category>(BASE_URL + '/api/v1/categories', {name})
  }

  createPromoCode(name: String, korting: Number) {
    return this.http.post<PromoCode>(BASE_URL + '/api/v1/promocodes', {name, korting})
  }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${BASE_URL}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${BASE_URL}/files`);
  }
}
