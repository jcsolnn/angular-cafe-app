import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { MenuCategory } from '../models/menu-category.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories : MenuCategory[];

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.getCategories();

  }

  getCategories():void{
    this.menuService.getCategories()
      .subscribe(categories => this.categories = categories);
  }



}
