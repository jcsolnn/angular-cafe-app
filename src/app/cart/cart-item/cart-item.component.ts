import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { CartItem } from "src/app/models/cart-item.model";
import { NgForm } from "@angular/forms";
import { CartService } from "src/app/services/cart.service";
import { typeWithParameters } from "@angular/compiler/src/render3/util";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Input() itemIndex: number;
  //@ViewChild("itemForm", { static: false }) itemForm: NgForm;
  editMode = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if(!this.editMode){
      this.editMode = true;
      form.controls["quantity"].enable();
    }else{
      this.cartService.updateCartItem(this.itemIndex, form.value.quantity);
      this.editMode = false;
      form.controls["quantity"].disable();
    }
  }
  onRemoveItem(){
    this.cartService.removeCartItem(this.itemIndex);
  }
}
