import { MenuItem } from './menu-item.model';

export class CartItem{
   id: string; //item id is a combination of alpha & numberic
  name: string;
  unitPrice: number;
  quantity: number;
  subtotal: number; //unitPrice * quantity

/*   constructor(id: string, name: string, unitPrice: number, quantity: number, totalPrice:number){
    this.id = id,
    this.name = name,
    this.unitPrice = unitPrice;
    this.quantity = quantity
    this.totalPrice = totalPrice;
  } */
  constructor(item: MenuItem, quantity: number){
    this.id = item.id;
    this.name = item.name;
    this.unitPrice = item.price;
    this.quantity = quantity;
  }
  getSubtotal(){
    return this.quantity * this.unitPrice;
  }

}
