//TODO: replace with Cart model
import { CartItem } from './cart-item.model';

export class Order{
  //dateTime: number;
  //orderNo: number;
  // Number of itmes in this order
  quantity: number;
  readonly SALES_TAX: number = 0.0625;
  tax: number;
  // Total price of this order, including sales tax
  totalPrice: number;
  // items pending for this order
  //items: OrderItem[] = [];
  items: CartItem[];

  constructor(quantity: number, totalPrice: number){
    this.quantity = quantity;
    this.totalPrice = totalPrice;
    this.items = [];
  }
}
