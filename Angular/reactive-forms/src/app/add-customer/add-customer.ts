import { Component, inject } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../customer-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-customer',
  imports: [FormsModule],
  templateUrl: './add-customer.html',
  styleUrl: './add-customer.css'
})
export class AddCustomer {

  router = inject(Router);

customerService = inject(CustomerService);

  customer = {
    name: '',
    age: 0,
    department: '',
  }
  customerForm: any;


  submitCustomerForm(form: any) {
    if (form.valid) {
      console.log(form.form.value);
      this.customerService.addCustomers(form.form.value).subscribe(params => {
        console.log(params);

        this.router.navigate(['/customer']);
      })
    }

  }

}
