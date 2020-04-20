// itemId consists of a letter indicating the category it belongs in
// (C = coffee, B = Bread, P = pastry) and a number
export class MenuItem{
  id: string;
  categoryId: number;
  name: string;
  //description: string;
  price: number;
  //imagePath: string;

  constructor(id:string, categoryId: number, name:string, price:number){
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.price =price;
  }
}
