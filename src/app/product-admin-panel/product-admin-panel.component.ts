import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductInterface} from "../models/product.interface";
import {ProductService} from "../service/product.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductFormComponent} from "../product-form/product-form.component";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-admin-panel',
  templateUrl: './product-admin-panel.component.html',
  styleUrls: ['./product-admin-panel.component.css']
})
export class ProductAdminPanelComponent {

  public products: ProductInterface[] = [];


  constructor(private productService: ProductService, public dialog: MatDialog) {
  }


  openForm(product?: ProductInterface): void {
    const productForm = this.dialog.open(ProductFormComponent, {
      data: {
        id: product?.id,
        name: product?.name,
        price: product?.price
      },
    });

    productForm.afterClosed().subscribe(() => {
      this.getAllProducts();
    })
  }

  public getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (response: ProductInterface[]) => {
        this.products = response;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteProduct(product: ProductInterface): void {
    this.productService.deleteProduct(product.id).subscribe(
      () => {
        this.getAllProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  ngOnInit(): void {
    this.getAllProducts();
  }

  @Input() productId: string = "";

  @Output() selectedProductEvent = new EventEmitter<string>();

  addProductIdToFloor(value: string) {
    this.selectedProductEvent.emit(value);
    console.log(value)
  }


}
