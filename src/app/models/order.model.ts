import { Cart } from "./cart.model";
import { CartItem } from "./cart-item.model";

export class Order {
  //dateTime: number;
  //orderNo: number;
  items: CartItem[];
  quantity: number;
  readonly SALES_TAX: number = 0.0625;
  //price before taxes
  subtotal: number;
  tax: number;
  //price of this order, including tax
  total: number;

  constructor(cart: Cart) {
    this.items = cart.items;
    this.quantity = cart.quantity;
    this.subtotal = cart.total;
    this.tax = this.subtotal * this.SALES_TAX;
    this.total = this.subtotal + this.tax;
  }
}
