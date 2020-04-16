import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MenuComponent } from "./menu/menu.component";
import { CartComponent } from "./cart/cart.component";
import { MenuCategoryComponent } from "./menu/menu-category/menu-category.component";
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: "", redirectTo: "/menu", pathMatch: "full" },
  { path: "menu", component: MenuComponent},
  { path: "menu/category/:id", component: MenuCategoryComponent },
  { path: "cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
