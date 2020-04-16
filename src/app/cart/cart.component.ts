import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderItem } from '../models/order-item.model';
//import { Order } from '../models/order.model';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  //order: Order;
  cartItems: OrderItem[] = [
    {id: "A1", name: "menu item 1",unitPrice: 3.5, quantity: 1, totalPrice: 3.5},
    {id: "B2", name: "menu item 2",unitPrice: 3.5, quantity: 1, totalPrice: 3.5},
    {id: "C3", name: "menu item 3",unitPrice: 3.5, quantity: 1, totalPrice: 3.5},
    {id: "D4", name: "menu item 4",unitPrice: 3.5, quantity: 1, totalPrice: 3.5},

  ]
  constructor(private cartService: CartService) {}

  ngOnInit(){
    //this.getItems();
    return this.cartItems;
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
