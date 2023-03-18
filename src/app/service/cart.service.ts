import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cart, CartItem} from "../models/cart.interface";
import {forEach} from "@angular-devkit/schematics";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] , total_items: 0, total_price: 0});

  constructor() { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
      let total_price : number = itemInCart.quantity*itemInCart.price;
      let total_items : number = itemInCart.quantity
      this.cart.next({ items , total_price, total_items});
    } else {
      items.push(item);
      let total_price : number = item.price;
      let total_items : number = item.quantity;
      this.cart.next({ items, total_price, total_items});
    }




  }

}
