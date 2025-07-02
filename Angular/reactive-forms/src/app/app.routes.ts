import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { Customer } from './customer/customer';
import { PageNotFound } from './page-not-found/page-not-found';
import { CustomerDetail } from './customer-detail/customer-detail';
import { Houses } from './houses/houses';
import { AddCustomer } from './add-customer/add-customer';
import { EditCustomer } from './edit-customer/edit-customer';

export const routes: Routes = [
    {
        path: 'signin',
        component: SignIn,

    },

    {
        path: 'signup',
        component: SignUp
    },



    {
        path: 'customer',
        component: Customer
    },
    
    {
        path: 'customer/:id',
        component: CustomerDetail
    },

     {
        path: 'add-customer',
        component: AddCustomer
    },

      {
        path: 'edit-customer/:id',
        component: EditCustomer
    },

    {
        path: 'housing',
        component: Houses
    },

   
    
    {
        path: '',
        redirectTo: 'customer',
        pathMatch: 'full'
    },

    {
        path: '**',
        component: PageNotFound
    },

    
];
