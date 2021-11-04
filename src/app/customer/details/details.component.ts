import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Customer } from '../model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  currentCustomer!: Customer;
  errorMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private cService: CustomerService

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        if(id){
          this.cService.getCustomer(+id).subscribe(
            customer => {
              if(customer) this.currentCustomer = customer;
              else this.errorMessage = `There's no customer with id ${id}`
            },
            error => this.errorMessage = error
          );
        }else{
          this.errorMessage = `Please enter a correct Id`;
        }
      }
    )
  }

}
