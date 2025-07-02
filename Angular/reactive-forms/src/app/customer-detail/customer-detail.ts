import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-customer-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-detail.html',
  styleUrl: './customer-detail.css'
})
export class CustomerDetail {
 route = inject(ActivatedRoute);

 customerId = 0;
 customer$!: Observable<any>;
 customerService = inject(CustomerService);
 router = inject(Router);


 ngOnInit(){
  this.customerId = Number(this.route.snapshot.params['id']);

  if(this.customerId){
    this.customer$ = this.customerService.getCustomerbyId(this.customerId);
  
  }
 }

 putCustomer(form:any){
  if(form.valid){
    console.log(this.customerId)
    this.customerService.updateCustomer(this.customerId, form.form.value).subscribe(result => {
      console.log(result);
      this.router.navigate(['/customer']);
    });
    
  }
 }

//  constructor (){
//   this.customerId = Number(this.route.snapshot.params['id']);
//   console.log('Coming here', this.customerId)

//   if(this.customerId) {
//    this.customerService.getCustomerbyId(this.customerId).subscribe(params => {
//     this.customer = params;
//     console.log(this.customer);
//    });
//   }
//  }

// customers = this.customerService.getCustomers();

}
