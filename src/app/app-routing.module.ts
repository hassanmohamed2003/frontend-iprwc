import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {CartComponent} from "./cart/cart.component";
import {HomeComponent} from "./home/home.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminPanelComponent}
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
