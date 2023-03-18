import {Component} from '@angular/core';
import {CartService} from "../service/cart.service";
import {Cart, CartItem} from "../models/cart.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts: CartItem[] = []

  cart: Cart = { items: [] , total_items: 0, total_price: 0};

  cartSubscription: Subscription | undefined;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.cartProducts = _cart.items;
    });
  }
}
