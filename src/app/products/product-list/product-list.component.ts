import {Component, EventEmitter, Output} from '@angular/core';
import { Product} from "../../models/product.interface";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  constructor(private cartService: CartService) {
  }

  @Output() newProductEvent = new EventEmitter<Product>();

  addtoCart(cartProduct: Product) {
    this.shoppingcart.push(cartProduct)
  }

  mockdataProduct : Product = {
    id: "1",
    name: "inazuma eleven",
    price: "19.11"
  }

  productList : Product[] = []

  shoppingcart : Product[] = []
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      name: product.name,
      price: product.price,
      quantity: 1,
      id: product.id,
    });

  }
}
