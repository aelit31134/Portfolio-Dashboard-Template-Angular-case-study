import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email:[''],
      pass:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/register")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.pass === this.loginForm.value.pass
      });
      if(user){
        alert("Login Successful");
        this.loginForm.reset();
        this.router.navigate(['home/dashboard']);
      }else{
        alert("User not found, please register");
      }
    },err=>{
      alert("Something went wrong!");
    })
  }

}
