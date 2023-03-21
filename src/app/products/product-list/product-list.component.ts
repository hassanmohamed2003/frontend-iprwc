import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductInterface} from "../../models/product.interface";
import {CartService} from "../../service/cart.service";
import {ProductService} from "../../service/product.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  public products: ProductInterface[] = [];


  constructor(private cartService: CartService, private productService: ProductService) {
    this.productService = productService;
    this.cartService = cartService;
  }

  @Output() newProductEvent = new EventEmitter<ProductInterface>();

  addtoCart(cartProduct: ProductInterface) {
    this.shoppingcart.push(cartProduct)
  }

  mockdataProduct : ProductInterface = {
    id: "1",
    name: "inazuma eleven",
    price: 19.10
  }

  public selectedProduct: ProductInterface = {
    price: 0,
    name: "",
    id: ""
  };

  productList : ProductInterface[] = []

  shoppingcart : ProductInterface[] = []

  onAddToCart(product: ProductInterface): void {
    this.cartService.addToCart({
      name: product.name,
      price: product.price,
      quantity: 1,
      id: product.id,
    });

  }

  public getProducts(): void{
    this.productService.getAllProducts().subscribe(
      (response: ProductInterface[]) => {
        this.products = response;
        console.log(response)
        console.log("test")
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(error.message)

      }
    );
  }

  checkSelectedProduct(): void {
    this.productService.currentSelectedProduct$
      .subscribe(value => this.selectedProduct = value);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
