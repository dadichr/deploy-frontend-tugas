import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public loginData: any = {}
  constructor(public fb: FormBuilder,public authservice: AuthService,public router: Router,) { }

  ngOnInit(): void {
  }
  loginUser() {
    this.authservice.postLogin(this.loginData).subscribe((response : any) =>{
      console.log('xxx', response)
      this.router.navigate([''])
    })
    Swal.fire({
      title: "Login sUCCES",
      text: "login ok",
      icon: "success",
    })
  } 
  
}
