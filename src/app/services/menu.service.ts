import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { MenuCategory } from '../models/menu-category.model';
import { CATEGORIES } from '../models/menu-categories';
import { MenuItem } from '../models/menu-item.model';
import { ITEMS } from '../models/menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  //Get the category with the specific id
   getCategory(id: number): Observable<MenuCategory>{
    return of(CATEGORIES.find(category => category.id === id));
  }
/*   getCategory(id: number){
    return CATEGORIES.find(category => category.id === id);
  } */
  // Get the categories for this menu
  getCategories(): Observable<MenuCategory[]>{
    return of(CATEGORIES);
  }
  // Get items for a specific menu category
  getItems(id: number): Observable<MenuItem[]>{
    return of(ITEMS.filter(item => item.categoryId === id));
  }
/*   getItems(id:number){
    return ITEMS.filter(item => item.categoryId === id);
  } */
}
