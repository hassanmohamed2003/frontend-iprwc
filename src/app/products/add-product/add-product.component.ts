import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AdminService} from "../../admin.service";
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../../app.component";
import {Router} from "@angular/router";
import {ProductInterface} from "../../models/product.interface";
import {ProductsComponent} from "../products.component";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  product: ProductInterface = {} as ProductInterface;
  categories: Category[]=[];
  public loading = false;
  form:FormGroup;




  constructor(private toastr: ToastrService, private fb:FormBuilder, private router: Router, private http: HttpClient, private adminService: AdminService) {

    this.form = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      stock: ["", Validators.required],
      shortDescription: ["", Validators.required],
      category: [null, Validators.required],
      description: ["", Validators.required],
      imageSrcCover: ["", Validators.required],
      imageSrcCharacter: ["", Validators.required]
    });
  }
  ngOnInit(): void {
    this.getCategories();
  }


  getCategories() {
    this.http.get<Category[]>(BASE_URL + '/api/v1/categories').pipe().subscribe((res) => {
      this.categories = res;
    })
  }

  onSubmit() {

    const val = this.form.value;
    if (this.form.valid) {
      this.loading = true
      this.adminService.createProduct(val.name, val.price, val.stock, val.category, val.shortDescription, val.description, val.imageSrcCover, val.imageSrcCharacter).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigateByUrl('/admin/edit-products');
          this.toastr.success('Succesvol het product-page aangemaakt!', 'Product Aangemaakt!')
        },
        error: error => {
          this.loading = false;
          console.error('There was an error!', error);
        }
      });

    } else {
      console.log('There was an error! Form invalid!');
    }
  }

}
