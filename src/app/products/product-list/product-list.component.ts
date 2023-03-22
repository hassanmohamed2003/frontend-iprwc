import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductInterface} from "../../models/product.interface";
import {CartService} from "../../service/cart.service";
import {ProductService} from "../../service/product.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {Category} from "../../models/category.interface";
import {BASE_URL} from "../../app.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  public products: ProductInterface[] = [];

  Categories : Category[] = [];


  constructor(private cartService: CartService, private productService: ProductService, private http: HttpClient) {
    this.productService = productService;
    this.cartService = cartService;
  }

  @Output() newProductEvent = new EventEmitter<ProductInterface>();

  addtoCart(cartProduct: ProductInterface) {
    this.shoppingcart.push(cartProduct)
  }

  //add this function later to a service class
  getCategories() {
    this.http.get<Category[]>(BASE_URL + '/api/v1/categories').subscribe((res) => {
      this.Categories = res;
      console.log(res)
    })
  }

  CategoryList = new FormControl('');

  public selectedProduct: ProductInterface = {
    category: null as any,
    description: "",
    imageSrcCharacter: "",
    imageSrcCover: "",
    shortDescription: "",
    stock: 0,
    price: 0,
    name: "",
    id: ""
  };

  public selectedCategory : Category = {
    createDate: "",
    id: "",
    name: ""

  }

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
    this.getCategories();
  }

  onEvent(event: { stopPropagation: () => void; }) {
    event.stopPropagation();
  }

}
