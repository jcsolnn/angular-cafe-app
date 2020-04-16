// Features to untilize in app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCategoryComponent } from "./menu/menu-category/menu-category.component";
import { CartComponent } from './cart/cart.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { CheckoutComponent } from './checkout/checkout.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CartComponent,
    MenuCategoryComponent,
    DropdownDirective,
    CheckoutComponent,
    MenuItemComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
