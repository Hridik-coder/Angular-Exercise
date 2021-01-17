import { Component, OnInit } from '@angular/core';
import { Productdata } from '../productdataClass';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css']
})

export class ProductdataComponent implements OnInit {
    data : Productdata[] =[];
    msg : string = '';
  constructor(private ProductservicesObj : ProductserviceService) {}
   
  ngOnInit(): void {
    this.data = this.ProductservicesObj.data;
  }
    showDetails(i : Productdata){
     
       this.msg = 'Product Name: ' + i.productName +
       '\nProduct Code: ' + i.productCode +
       '\nBranch Name: ' + i.branchName +
       '\nBranch Code: ' + i.branchCode +
       '\nShipping Address: ' + i.shippingAddress;
       
      alert(this.msg);
    }
}
