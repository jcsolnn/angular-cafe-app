import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  //@ViewChild('paymentForm') form:NgForm;
  paymentForm = this.fb.group({
    //name: [''] similar to new FormControl(''),
    name: [
      "",
      [
        Validators.required,
        //Validators.pattern("^[a-zA-Z]+([ -]*[a-zA-Z])*$"), //won't accept if space or hyphen at end of input, but anywhere else is fine, including infinite between words
        Validators.pattern("^[a-zA-Z -]+"), //simple but accepts if infinite amount of space or hypen left at end of input
      ],
    ],
    zipCode: ["", [Validators.required, Validators.pattern("^[0-9]{5}$")]],
    ccNumber: [
      "",
      [Validators.required, Validators.pattern("^[0-9]{16}(?:[0-9]{3})?$")],
    ],
    ccSecCode: ["", [Validators.required, Validators.pattern("^[0-9]{3}$")]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    this.paymentForm.reset();
  }
}
