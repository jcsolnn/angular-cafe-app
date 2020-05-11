import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  order: Order;
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private orderService: OrderService) {}

  ngOnInit() {
    this.createForm();
    this.order = this.orderService.getOrder();
  }

  onSubmit() {
    this.paymentForm.reset();
  }
  createForm(){
    this.paymentForm = this.fb.group({
      //name: [''] similar to new FormControl(''),
      name: [
        '',
        [
          Validators.required,
          //Validators.pattern("^[a-zA-Z]+([ -]*[a-zA-Z])*$"), //won't accept if space or hyphen at end of input, but anywhere else is fine, including infinite between words
          Validators.pattern("^[a-zA-Z -]+"), //simple but accepts if infinite amount of space or hypen left at end of input
        ],
      ],
      zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      ccNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{16}(?:[0-9]{3})?$')],
      ],
      ccCode: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
    });
              }

  get name (){ return this.paymentForm.get('name');}
  get zipcode() { return this.paymentForm.get('zipcode');}
}
