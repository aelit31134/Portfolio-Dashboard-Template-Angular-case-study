import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;
  registerval = false;
  passmatch = false;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  

  constructor(private authService: AuthService ,private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name:['', Validators.required],
      username:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      pass:['', Validators.required],
      conpass:['', Validators.required]
    })
  }

  register(){
    if(!this.registerForm.valid){
      this.registerval = true;
    }else{
    const { name, username, email, phone, pass } = this.registerForm.value;

    this.authService.register(name, username, email, phone, pass).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.redirect();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  }

  redirect(){
  if(this.isSuccessful){
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },1000);
  }
  }

  conPass(){
    if(this.registerForm.get('pass').value != this.registerForm.get('conpass').value){
      this.passmatch = true;
    }else{
      this.passmatch = false;
    }
  }

}
