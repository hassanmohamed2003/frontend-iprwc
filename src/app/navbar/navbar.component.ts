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

  cartSubscription: Subscription | undefined;
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }



}
