import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Customer, CUSTOMER_LIST } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  getCustomerList() : Observable<Customer[]>{
    // Change to connect with backend
    // return this.http.get<Customer[]>('customers');
    return of(CUSTOMER_LIST);
  }

  getCustomer(id: number): Observable<Customer | undefined> {
    // Change to connect with backend
    // return this.http.get<Customer>(`customers?id=${id}`);
    return of(CUSTOMER_LIST.find(c => c.id === id));
  }
}
