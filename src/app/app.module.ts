import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ProductsComponent} from './products/products.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {ProductListComponent} from './products/product-list/product-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatLineModule, MatOptionModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ProductListFlexComponent} from './products/product-list-flex/product-list-flex.component';
import {MatMenuModule} from "@angular/material/menu";
import {ProductsListComponent} from './products/products-list/products-list.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AccountComponent} from './account/account.component';
import {FilterPipe} from './shared/filter.pipe';
import {AccessDeniedComponent} from './access-denied/access-denied.component';
import {AdminComponent} from './admin/admin.component';
import {ManagerComponent} from './manager/manager.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AddProductComponent} from './products/add-product/add-product.component';
import {EditProductComponent} from './products/edit-product/edit-product.component';
import {EditSingleProductComponent} from './products/edit-single-product/edit-single-product.component';
import {AddCategoriesComponent} from './category/add-categories/add-categories.component';
import {EditCategoriesComponent} from './category/edit-categories/edit-categories.component';
import {EditSingleCategoryComponent} from './category/edit-single-category/edit-single-category.component';
import {EditUsersComponent} from './edit-users/edit-users.component';
import {ShopComponent} from './shop/shop.component';
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {ToastrModule} from "ngx-toastr";
import {AuthInterceptorService} from "./auth-interceptor.service";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    HomeComponent,
    ProductListComponent,
    ProductListFlexComponent,
    ProductsListComponent,
    AccountComponent,
    FilterPipe,
    AccessDeniedComponent,
    AdminComponent,
    ManagerComponent,
    LoginComponent,
    SignupComponent,
    AddProductComponent,
    EditProductComponent,
    EditSingleProductComponent,
    AddCategoriesComponent,
    EditCategoriesComponent,
    EditSingleCategoryComponent,
    EditUsersComponent,
    ShopComponent,
    ShoppingCartComponent,
    NavigationComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatLineModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatMenuModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatTableModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
