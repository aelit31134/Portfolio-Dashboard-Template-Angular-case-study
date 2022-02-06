import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  loginval = false;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }

    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      pass:['', Validators.required]
    })
  }

  login(){
    if(!this.loginForm.valid){
      this.loginval = true;
    }else{
    const { username, pass } = this.loginForm.value;

    this.authService.login(username, pass).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.redirect();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  }
  redirect(){
    if(this.isLoggedIn){
      setTimeout(()=>{
        this.router.navigate(['/home/dashboard']);
      },1000);
    }
    }

}
