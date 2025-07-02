import { Component, inject } from '@angular/core';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { CustomerService } from '../customer-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {

  customerService = inject(CustomerService);
  customers$!: Observable<any>;


  ngOnInit() {
    this.customers$ = this.customerService.getCustomers();
  }
 
  delCust(id:number) {
    this.customerService.deleteCustomerbyId(id).subscribe( params => {
      if(params){
        this.customerService.getCustomers();
      }
    });
  }

  router = inject(Router);

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['signin']);
  }
  

}
