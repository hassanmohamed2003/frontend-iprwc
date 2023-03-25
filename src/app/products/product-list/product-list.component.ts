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

  quantity: number = 1;

  public showProducts: ProductInterface[] = [];
  Categories : Category[] = [];


  CheckedCategories : Category[] = [];



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
      this.Categories.forEach(
        Categories => {
          // If selected and flag is true
          Categories.isChecked = true;
        }
      )
      // console.log(res)
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
    name: "",
    isChecked: true
  }


  productList : ProductInterface[] = []

  shoppingcart : ProductInterface[] = []

  onAddToCart(product: ProductInterface): void {
    if(product.stock > 0){
      this.cartService.addToCart(product.id, this.quantity);
      product.stock = product.stock - 1
    }
    else(
      alert("Sorry, product is out of stock. Check in later!")

    )

  }

  public getProducts(): void{
    this.productService.getAllProducts().subscribe(
      (response: ProductInterface[]) => {
        this.products = response;
        this.showProducts = response;
        // console.log(response)
        // console.log("test")
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
    this.cartService.initCart();
    // this.checkSelectedCategory()
  }

  onEvent(event: { stopPropagation: () => void; }) {
    event.stopPropagation();

  }

  checkSelectedCategory(category: Category[]) {
    this.showProducts = []
    for (let i = 0; i < category.length; i++) {
      for (const product of this.products) {
        if(category[i].name == product.category.name){
          this.showProducts.push(product)
          console.log(this.showProducts)
        }
      }
    }
  }


  updateState() {
    // console.log(this.Categories)
    this.CheckedCategories = [];
    // Itearte over plans
    this.Categories.forEach(
      Categories => {
        // If selected and flag is true
        if(Categories.isChecked){
          console.log(this.CheckedCategories)
          this.CheckedCategories.push(Categories)
          // console.log(Categories)
          this.checkSelectedCategory(this.CheckedCategories)
        }
      }
    )
  }


}
