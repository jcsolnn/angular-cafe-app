import { CartItem } from './cart-item.model';

export class Cart{
   // Number of itmes in this cart
  quantity: number;
  items: CartItem[];
  // Total price of items in cart, excluding tax
  total: number;

  constructor(items: CartItem[]){
    this.items = items;
    this.quantity = this.getQuantity();
  }

  getQuantity(){
    this.quantity = this.items.reduce((qty, current)=> qty + current.quantity, 0);
    return this.quantity;
  }

}
