import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor (private _AuthService:AuthService , private _Router:Router){
  
}


loginForm:FormGroup=new FormGroup({
email:new FormControl(null, [Validators.required,Validators.email]),
password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)])


})

handelLogin(loginForm:FormGroup){


  console.log(loginForm)

}




}



