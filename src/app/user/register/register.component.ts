import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  public registerData: any = {}
  constructor(public fb: FormBuilder,public registerservice: RegisterService,public router: Router,) { }
  

  ngOnInit(): void {
  }
  registerUser() {
    this.registerservice.postRegister(this.registerData).subscribe((response : any) =>{
      console.log('xxx', response)
      this.router.navigate(['login'])
    })
  } 
}
