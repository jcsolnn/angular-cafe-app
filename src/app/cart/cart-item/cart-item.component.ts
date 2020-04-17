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
  @ViewChild("itemForm", { static: false }) itemForm: NgForm;
  editMode = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if(!this.editMode){
      this.editMode = true;
      form.controls["quantity"].enable();
    }else{
      // const newQuantity = form.value; // return quantity value for ths item
      //console.log(form.value.quantity); //form.value returns an object
      this.cartService.updateCartItem(this.itemIndex, form.value.quantity);
      this.editMode = false;
      form.controls["quantity"].disable();
    }

    //update cart and form value

    // console.log(newQuantity);
    // form.controls['quantity'].setValue(newQuantity);
    // form.controls['quantity'].disable();
    // Deletes currnt qty value
    //this.cartService.updateCartItem(this.itemIndex, newQuantity);

  }
  onRemoveItem(){
    this.cartService.removeCartItem(this.itemIndex);
  }

  /*   onUpdateItem(newQuantity: number){
        this.itemForm.setValue({quantity:newQuantity})
  } */
}
