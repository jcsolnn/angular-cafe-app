import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-payment-info",
  templateUrl: "./payment-info.component.html",
  styleUrls: ["./payment-info.component.css"],
})
export class PaymentInfoComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.paymentForm = this.fb.group({
      //name: [''] similar to new FormControl(''),
      name: [
        "",
        [
          Validators.required,
          /**
           * Won't accept if space or hypen at end of input
           * but allows unlimted space or hyphens between words
           * Validators.pattern("^[a-zA-Z]+([ -]*[a-zA-Z])*$"),
           */

          Validators.pattern("^[a-zA-Z -]+"), //simple but accepts if infinite amount of space or hypen left at end of input
        ],
      ],
      zipcode: ["", [Validators.required, Validators.pattern("^[0-9]{5}$")]],
      ccNumber: [
        "",
        [Validators.required, Validators.pattern("^[0-9]{16}(?:[0-9]{3})?$")],
      ],
      //ccNumber: ['',[ValidateCC]],
      ccCode: ["", [Validators.required, Validators.pattern("^[0-9]{3}$")]],
    });
  }

  onSubmit() {
    this.paymentForm.reset();
  }

  get name() {
    return this.paymentForm.get("name");
  }

  get zipcode() {
    return this.paymentForm.get("zipcode");
  }
}
/** TODO: Custom validator needs to implemented with service */
/*   function ValidateCC(control: AbstractControl): {[key:string]: any}{
    if(control.value.length < 16 || control.value.length > 19){
      return {'ccInvalid': true};
    }
    return null;
  } */
