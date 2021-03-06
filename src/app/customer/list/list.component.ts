import { Component, OnInit } from '@angular/core';

import { CustomerService } from '@customer/services/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  customerList = this.cService.getCustomerList();

  constructor(
    private cService: CustomerService
  ) { }

  ngOnInit(): void {
  }

}
