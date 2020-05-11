import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Cart } from '../models/cart.model';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order;
  cart: Cart;

  constructor(private cartService:CartService) { }

  getOrder(){
    this.cart = this.cartService.getCart();
    this.order = new Order(this.cart);
    return this.order;

  }
}
