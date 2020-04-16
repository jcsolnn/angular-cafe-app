import { OrderItem } from './order-item.model';

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
  items: OrderItem[];

  constructor(quantity: number, totalPrice: number){
    this.quantity = quantity;
    this.totalPrice = totalPrice;
    this.items = [];
  }
}
