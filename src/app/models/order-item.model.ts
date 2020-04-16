export class OrderItem{
  id: string; //item idea is a combination of alpha & numberic
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;

  constructor(id: string, name: string, unitPrice: number, quantity: number, totalPrice:number){
    this.id = id,
    this.name = name,
    this.unitPrice = unitPrice;
    this.quantity = quantity
    this.totalPrice = totalPrice;
  }
}
