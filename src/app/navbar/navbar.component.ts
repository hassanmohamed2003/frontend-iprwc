import {Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";
import {Cart, CartItem} from "../models/cart.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartProducts: CartItem[] = []
  cart: Cart = {items: [], total_items: 0, total_price: 0};

  cartSubscription: Subscription | undefined;
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.cartProducts = _cart.items;
    });
    console.log(this.cart)
  }



}
