// Features to untilize in app
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { MenuCategoryComponent } from "./menu/menu-category/menu-category.component";
import { CartComponent } from "./cart/cart.component";
import { DropdownDirective } from "./directives/dropdown.directive";
import { CheckoutComponent } from "./checkout/checkout.component";
import { MenuItemComponent } from "./menu/menu-item/menu-item.component";
import { CartItemComponent } from "./cart/cart-item/cart-item.component";
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { PaymentInfoComponent } from './checkout/payment-info/payment-info.component';

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
    CartItemComponent,
    OrderSummaryComponent,
    PaymentInfoComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
