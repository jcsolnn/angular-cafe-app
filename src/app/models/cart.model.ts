import { CartItem } from './cart-item.model';

export class Cart{
   // Number of itmes in this cart
  quantity: number;
  // List of items in this cart.
  items: CartItem[];
  // Total price of items in this cart, excluding tax
  total: number;

  constructor(){
    this.items = [];
    this.quantity = 0;
    this.total = 0;
  }
/*   Test
    constructor(items: CartItem[]){
    this.items = items;
    this.setQuantity();
    this.setTotal();
  } */

  setQuantity(){
    this.quantity = this.items.reduce((qty, current)=> qty + current.quantity, 0);
  }

  setTotal(){
    this.total = this.items.reduce((total, current) => total + current.subtotal, 0);
  }

}
