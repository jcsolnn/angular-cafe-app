import { Component, OnInit} from '@angular/core';
import { MenuService} from '../services/menu.service';
import { MenuCategory} from '../models/menu-category.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories: MenuCategory[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories(): void{
    this.menuService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
