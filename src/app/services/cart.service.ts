import { Injectable, EventEmitter} from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { CartItem } from '../models/cart-item.model';
import { Cart } from '../models/cart.model';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  tempItems: CartItem[] = [
    new CartItem( new MenuItem("C1", 1, "Americano", 3), 4 ),
    new CartItem( new MenuItem("B1", 2, "Espresso Bun", 3), 2),
    new CartItem( new MenuItem("P1", 3, "Croissant", 2.25), 1)
  ];
  cart: Cart = new Cart(this.tempItems);
  //itemsChanged = new EventEmitter<CartItem[]>(); //test may not need

  constructor() { }

  getCart(){
    return this.cart;
  }
  addToCart(item: MenuItem, quantity:number){
    this.cart.quantity += quantity;
    this.cart.items.push(new CartItem(item, quantity));
    //this.itemsChanged.emit(this.cart.items); //test may not need
  }

  updateCartItem(index:number, newQty: number){
    const oldQty = this.cart.items[index].quantity;
    const difference = Math.abs(this.cart.items[index].quantity - newQty);
    if(oldQty < newQty){
      this.cart.quantity += difference;
    }else{
      this.cart.quantity -= difference;
    }
    this.cart.items[index].quantity = newQty;
    //this.itemsChanged.next(this.cart.items);
  }

  removeCartItem(index: number){
    this.cart.quantity -= this.cart.items[index].quantity;
    this.cart.items.splice(index,1);
    //this.itemsChange.next(this.cart.items)
  }

/*
  getItems(){
    return this.cartItems;
  }
  removeItem(id:string){
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }
  clearCart(){
    this.cartItems = [];
  }

   addToCart(item: MenuItem, quantity:number){
    const totalPrice = unitPrice * quantity;
    const newCartItem = new CartItem(item.id, item.name, item.price, quantity, totalPrice);
    this.order.quantity += quantity;

    //caulateTotal();
    this.order.tax = this.order.SALES_TAX * totalPrice;
    //this.order.totalPrice += totalPrice;
    this.order.items.push(newCartItem);
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
