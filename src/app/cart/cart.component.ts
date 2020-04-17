import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';
import { Cart } from '../models/cart.model';


@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.getCart();
    //subscribe to cart items change, may not need though
/*     this.cartService.itemsChanged
    .subscribe(
      (items: CartItem[])=>{
        this.cart.items = items;
      }
    ); */
  }

  getCart(){
    this.cart = this.cartService.getCart();
  }

/*   getItems(): void{
    this.cartItems = this.cartService.getItems();
  } */


/*   ngOnInit() {
    //this.orderItems = this.cartService.getItems();
    this.getOrder();
  }

  getOrder() {
    this.order = this.cartService.getOrder();
  }
  onClearCart(): void {
    this.cartService.clearCart();
  }*/
}
