import {Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";
import {Cart, CartItem} from "../models/cart.interface";
import {Subscription} from "rxjs";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartProducts: CartItem[] = []

  public isAdmin = this.authService.isAdmin()


  cartSubscription: Subscription | undefined;
  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/home')
  }



}
