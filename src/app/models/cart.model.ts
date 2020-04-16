import { OrderItem } from './order-item.model';

export class Cart{
   // Number of itmes in this order
  quantity: number;
  items: OrderItem[];
  // Total price of items in cart, excluding tax
  total: number;

  constructor(quantity: number){
    this.quantity = quantity;
    this.items = [];
  }
}
