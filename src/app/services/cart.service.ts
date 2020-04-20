import { Injectable, EventEmitter } from "@angular/core";
import { MenuItem } from "../models/menu-item.model";
import { CartItem } from "../models/cart-item.model";
import { Cart } from "../models/cart.model";
import { ThrowStmt } from "@angular/compiler";

@Injectable({
  providedIn: "root",
})
export class CartService {
/*  sample data
    tempItems: CartItem[] = [
    new CartItem(new MenuItem("C1", 1, "Americano", 3), 4),
    new CartItem(new MenuItem("B1", 2, "Espresso Bun", 3), 2),
    new CartItem(new MenuItem("P1", 3, "Croissant", 2.25), 1),
  ];
  cart: Cart = new Cart(this.tempItems); */
  cart: Cart = new Cart();
  //itemsChanged = new EventEmitter<CartItem[]>(); //test may not need

  constructor() {}

  getCart() {
    return this.cart;
  }

  addToCart(item: MenuItem, quantity: number) {
    const index = this.cart.items
      .map(function (x) {
        return x.id;
      })
      .indexOf(item.id);
    //check if item already exists
    if (index != -1) {
      //if item exists, update exisiting item quantity
      const cartItem = this.cart.items[index];
      cartItem.quantity += quantity;
      //update item subtotal
      cartItem.subtotal += cartItem.unitPrice * quantity;
    } else {
      //else add new item to cart
      this.cart.items.push(new CartItem(item, quantity));
    }
    //update cart quantity
    this.cart.quantity += quantity;
    //update cart total
    this.cart.total += item.price * quantity;
    //this.itemsChanged.emit(this.cart.items); //test may not need
  }

  updateCartItem(index: number, newQty: number) {
    const cartItem = this.cart.items[index];
    const oldQty = cartItem.quantity;
    const difference = Math.abs(oldQty - newQty);
    //update cart
    if (oldQty < newQty) {
      this.cart.quantity += difference;
      this.cart.total += difference * cartItem.unitPrice;
    } else {
      this.cart.quantity -= difference;
      this.cart.total -= difference * cartItem.unitPrice;
    }
    //update item
    cartItem.quantity = newQty;
    cartItem.subtotal = cartItem.quantity * cartItem.unitPrice;

  }

  removeCartItem(index: number) {
    this.cart.quantity -= this.cart.items[index].quantity;
    this.cart.total -= this.cart.items[index].subtotal;
    this.cart.items.splice(index, 1);
    //this.itemsChange.next(this.cart.items)
  }

  clearCart(){
    this.cart.items = [];
    this.cart.quantity = 0;
    this.cart.total = 0;
  }
}
