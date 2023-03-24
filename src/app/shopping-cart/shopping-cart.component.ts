import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductInterface} from "../models/product.interface";
import {AuthService} from "../auth.service";
import {BASE_URL} from "../app.component";
import {CartService} from "../service/cart.service";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  constructor(private http: HttpClient, private authService: AuthService, private cartService: CartService, private productService: ProductService) {
  }


  products: ProductInterface[] = [];
  totalCost: number = 0;
  totalProducts: number = 0;
  cart: any[] = [];
  ngOnInit() {
  this.loadCart();
  }

  loadCart() {
    this.cartService.initCart();
    this.cart = this.cartService.getCart();

    this.products = [];
    this.totalCost = 0;
    this.totalProducts = 0;

    for (let i = 0; i < this.cart.length; i++) {
      this.getProduct(this.cart[i].productID, this.cart[i].quantity);
    }
  }


  getProduct(productId: String, quantity:number) {
    this.http.get<ProductInterface>(BASE_URL + '/api/v1/product/' + productId).subscribe((res) => {
      res.quantity = quantity;
      res.totalPrice = res.price * quantity;
      this.totalProducts += res.quantity;
      this.totalCost += res.totalPrice;
      this.products.push(res);
    })
  }

  removeItem(productID: String) {
    this.cartService.removeFromCart(productID);
    this.loadCart();
  }

  addQuantity(productQuantity: any, productID: String) {
    this.cartService.addToCart(productID, productQuantity += 1);
    this.loadCart();
  }

  subtractQuantity(productQuantity: any, productID: String) {
    this.cartService.addToCart(productID, productQuantity -= 1);
    this.loadCart();
  }

}
