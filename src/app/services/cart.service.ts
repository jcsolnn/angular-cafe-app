import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { OrderItem } from '../models/order-item.model';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //order: Order = new Order(0,0);
  // to store the array of current products in the cart (no handled by order)
  cartItems: OrderItem[] = [];

  constructor() { }

  addToCart(item: MenuItem, quantity:number){
    const totalPrice = item.price * quantity;
    const newOrderItem = new OrderItem(item.id, item.name, item.price, quantity, totalPrice);
    this.cartItems.push(newOrderItem);
  }

  getItems(){
    return this.cartItems;
  }
  removeItem(id:string){
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }
  clearCart(){
    this.cartItems = [];
  }

/*   addToCart(item: MenuItem, quantity:number){
    const totalPrice = unitPrice * quantity;
    const newOrderItem = new OrderItem(item.id, item.name, item.price, quantity, totalPrice);
    this.order.quantity += quantity;

    //caulateTotal();
    this.order.tax = this.order.SALES_TAX * totalPrice;
    //this.order.totalPrice += totalPrice;
    this.order.items.push(newOrderItem);
  }

  getOrder(){
    return this.order;
  }
  calculateTax(){
    this.order.tax = this.order.SALES_TAX * this.order.totalPrice;
  }
   calculateTotal(){
    this.order.totalPrice *= this.order.SALES_TAX;
  }
  clearCart(){
    this.order.items = [];
    this.order.quantity = 0;
    return this.order.items;
  }*/
}
