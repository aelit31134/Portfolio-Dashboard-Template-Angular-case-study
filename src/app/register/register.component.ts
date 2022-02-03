import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name:[''],
      email:[''],
      phone:[''],
      pass:[''],
      conpass:['']
    })
  }

  register(){
    this.http.post<any>("http://localhost:3000/register", this.registerForm.value)
    .subscribe(res=>{
      alert("Registration Successful");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong!");
    })
  }

}
