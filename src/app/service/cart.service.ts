import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cart, CartItem} from "../models/cart.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] , total: 0});

  constructor() { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];



    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
      let total : number = itemInCart.quantity*itemInCart.price;

      this.cart.next({ items , total});
    } else {
      items.push(item);
      let total : number = item.price;
      this.cart.next({ items , total});
    }




  }

}
