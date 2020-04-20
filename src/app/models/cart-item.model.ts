import { MenuItem } from './menu-item.model';

export class CartItem{
  id: string; //item id is a combination of alpha & numberic
  name: string;
  unitPrice: number;
  quantity: number;
  subtotal: number; //unitPrice * quantity

  constructor(item: MenuItem, quantity: number){
    this.id = item.id;
    this.name = item.name;
    this.unitPrice = item.price;
    this.quantity = quantity;
    this.subtotal = this.unitPrice * this.quantity;
  }
}
