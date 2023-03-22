import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from "@angular/material/icon";
import { ProductListComponent } from './products/product-list/product-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatLineModule, MatOptionModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from "@angular/common/http";
import { ProductListFlexComponent } from './products/product-list-flex/product-list-flex.component';
import {MatMenuModule} from "@angular/material/menu";
import { ProductsListComponent } from './products/products-list/products-list.component';
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent,
    ProductListComponent,
    ProductListFlexComponent,
    ProductsListComponent
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
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
