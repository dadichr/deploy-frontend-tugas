import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressesService } from 'src/app/shared/address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
  addressesForm: FormGroup;
  public addressData: any = {}
  constructor(public fb: FormBuilder,public addressservice: AddressesService,public router: Router,) { }
  

  ngOnInit(): void {
  }
  addressUser() {
    this.addressservice.postUserAddress(this.addressData).subscribe((response : any) =>{
      console.log('xxx', response)
      // this.router.navigate(['login'])
    })
  }
}
