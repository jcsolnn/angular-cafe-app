import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuItem } from 'src/app/models/menu-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: "app-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.css"],
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  @ViewChild("itemForm", { static: false }) itemForm: NgForm;
  constructor(private cartService: CartService) {}

  ngOnInit() {}

  //test form
  /*   onSubmit(form: NgForm) {
    //console.log('Submitted.');
    //view form obj
    console.log(form)
    //console.log(Object.values(form.value)); //returns an array
    //form.resetForm({qty:0});
    form.resetForm({qty:0});
  } */

  addToCart(item: MenuItem, quantity) {
    this.cartService.addToCart(item, parseInt(quantity));
    window.alert("Item added to cart.");
    this.itemForm.resetForm({ qty: 0 });
  }
}
