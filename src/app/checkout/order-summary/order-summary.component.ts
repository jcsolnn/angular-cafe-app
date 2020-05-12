import { Component, OnInit } from "@angular/core";
import { Order } from "src/app/models/order.model";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-order-summary",
  templateUrl: "./order-summary.component.html",
  styleUrls: ["./order-summary.component.css"],
})
export class OrderSummaryComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.order = this.orderService.getOrder();
  }
}
