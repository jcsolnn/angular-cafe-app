import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MenuItem } from "src/app/models/menu-item.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.css"],
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  //@ViewChild("menuItemForm", { static: false }) form: NgForm;
  constructor(private cartService: CartService) {}

  ngOnInit() {}

  /*  //with viewchild
    addToCart(item: MenuItem) {
    //console.log(item);
    //console.log(this.form.value.qty);
    this.cartService.addToCart(item, this.form.value.qty);
    window.alert("Item added to cart.");
    this.form.resetForm({ qty: 0 });
  } */

  addToCart(form: NgForm, item: MenuItem) {
    this.cartService.addToCart(item, form.value.qty);
    window.alert("Item added to cart.");
    form.resetForm();
  }
}
