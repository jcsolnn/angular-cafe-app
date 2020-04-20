import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  @ViewChild('paymentForm') form:NgForm;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.form.reset();
  }
}
