import {Component, EventEmitter, Output} from '@angular/core';
import {ProductInterface} from "../../models/product.interface";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  constructor(private cartService: CartService) {
  }

  @Output() newProductEvent = new EventEmitter<ProductInterface>();

  addtoCart(cartProduct: ProductInterface) {
    this.shoppingcart.push(cartProduct)
  }

  mockdataProduct : ProductInterface = {
    id: "1",
    name: "inazuma eleven",
    price: 19.11
  }

  productList : ProductInterface[] = []

  shoppingcart : ProductInterface[] = []
  onAddToCart(product: ProductInterface): void {
    this.cartService.addToCart({
      name: product.name,
      price: product.price,
      quantity: 1,
      id: product.id,
    });

  }
}
