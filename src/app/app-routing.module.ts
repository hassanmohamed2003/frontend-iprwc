import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {HomeComponent} from "./home/home.component";

import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {EditSingleCategoryComponent} from "./category/edit-single-category/edit-single-category.component";
import {EditCategoriesComponent} from "./category/edit-categories/edit-categories.component";
import {AddProductComponent} from "./products/add-product/add-product.component";
import {AddCategoriesComponent} from "./category/add-categories/add-categories.component";
import {EditProductComponent} from "./products/edit-product/edit-product.component";
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {EditSingleProductComponent} from "./products/edit-single-product/edit-single-product.component";
import {EditUsersComponent} from "./edit-users/edit-users.component";
import {ShopComponent} from "./shop/shop.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  // { path: 'products', component: ProductListComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'home', component: HomeComponent},
  // { path: 'auth/login', component: LoginComponent},
  // { path: 'auth/signup', component: SignupComponent},
  { path: '', component: HomeComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/signup', component: SignupComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'product/:id', component: ProductsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'admin/edit-products', component: EditProductComponent},
  { path: 'admin/edit/product/:id', component: EditSingleProductComponent},
  { path: 'admin/edit/category/:id', component: EditSingleCategoryComponent},
  { path: 'admin/add-product', component: AddProductComponent},
  { path: 'admin/edit-users', component: EditUsersComponent},
  { path: 'admin/edit-categories', component: EditCategoriesComponent},
  { path: 'admin/add-category', component: AddCategoriesComponent}

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
