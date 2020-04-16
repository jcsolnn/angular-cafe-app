import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from 'src/app/models/order-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: OrderItem;

  constructor() { }

  ngOnInit() {
  }


}
