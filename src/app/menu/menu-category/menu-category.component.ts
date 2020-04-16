import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Params } from "@angular/router";

import { MenuItem } from "../../models/menu-item.model";
import { MenuService } from "src/app/services/menu.service";
import { MenuCategory } from "src/app/models/menu-category.model";
import { NgForm, FormGroup, FormArray, FormControl } from "@angular/forms";
//import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: "app-menu",
  templateUrl: "./menu-category.component.html",
  styleUrls: ["./menu-category.component.css"],
})
export class MenuCategoryComponent implements OnInit {
  category: MenuCategory;
  items: MenuItem[];
  id: number;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) //private cartService: CartService
  {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.getCategory();
      this.getItems();
    });
  }


  getCategory() {
    this.menuService
      .getCategory(this.id)
      .subscribe((category) => (this.category = category));
  }
  getItems() {
    this.menuService
      .getItems(this.id)
      .subscribe((items) => (this.items = items));
  }


}
