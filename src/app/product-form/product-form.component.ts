import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductInterface} from "../models/product.interface";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {


  public productForm: FormGroup;

  public title!: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public product: {
      id: string;
      name: string;
      price: string;
    }
  ) {
    this.productForm = this.formBuilder.group({
      name: "",
      price: ""
    })
    this.productForm.controls['name'].setValue(this.product.name);
    this.productForm.controls['price'].setValue(this.product.price);
  }


  onSubmit(): void {
    if (!this.product.id) {
      this.createNewProduct();
    } else {
      this.updateSelectedProduct();
    }
  }

  public createNewProduct(): void {
    this.productService.createProduct({
      id: "",
      name: this.productForm.get('name')?.value,
      price: this.productForm.get('price')?.value
    }).subscribe(
      (response: ProductInterface) => {
        console.log(response);
        this.closeForm()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateSelectedProduct(): void {
    this.productService.updateProduct(
      {
        id: this.product.id,
        name: this.productForm.get('name')?.value,
        price: this.productForm.get('price')?.value
      }
    ).subscribe(
      (response: ProductInterface) => {
        console.log(response);
        this.closeForm();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  closeForm(): void {
  }

  ngOnInit(): void {
    if (!this.product.id) {
      this.title = "Add Product";
    } else {
      this.title = `Change ${this.product.name}`
    }
  }
}
