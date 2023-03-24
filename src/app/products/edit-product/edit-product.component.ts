import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {ProductInterface} from "../../models/product.interface";
import {BASE_URL} from "../../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{


  constructor(private http: HttpClient, private toastr: ToastrService, private authService: AuthService, private router: Router) { }
  products: ProductInterface[]=[];
  ngOnInit() {
    if(!this.authService.isAdmin()) {
      this.router.navigateByUrl('/');
    }
    this.getProducts();
  }

  getProducts() {
    this.http.get<ProductInterface[]>(BASE_URL + '/api/v1/product').pipe()
      .subscribe(product => {
          this.products = product;
        }
      )
  }

  removeProduct(productID : String) {
    this.http.delete<ProductInterface>(BASE_URL + '/api/v1/product/' + productID).subscribe(() => {
      this.ngOnInit();
      this.toastr.error('Succesvol verwijderd!', 'Product verwijderd!');
    })
  }

}
