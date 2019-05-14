import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from './customers-mock';
import { customer } from './Customer';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = CUSTOMERS;
  customer1:customer =
    { id: 1, name: ' jaya', emailid: 'jaya@gmail.com' };


  constructor() { }

  ngOnInit() {
  }
  addCustomer() {
    if (this.customer1.name.length > 0 && this.customer1.emailid.length > 0) {
      this.customer1.id = this.customers.length + 1;
      this.customers.push(this.customer1);
      this.customer1 = { id: 1, name: "jaya", emailid: "jaya@gmail.com" };
    }
    else {
      alert("name and emailid cannot be added")
    }
  }

  removeCustomer(num) {
    var customerList:customer[]=[];
    for(var i=0;i<this.customers.length;i++){
      if(this.customers[i].id!=num)
      {
        customerList.push(this.customers[i]);
      }
      this.customers=customerList;
    }
    
  }

}
