import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {CartComponent} from "./cart/cart.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
