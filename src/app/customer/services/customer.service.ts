import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Customer, CUSTOMER_LIST } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomerList() : Observable<Customer[]>{
    return of(CUSTOMER_LIST);
  }
}
