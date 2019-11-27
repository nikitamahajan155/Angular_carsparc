import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './LoginService.service';

@Component({
    selector: 'login-comp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    SC: FormGroup
    constructor(private sc1: LoginService){
        this.SC= new FormGroup({
        Contact:new FormControl(),
        Password:new FormControl()   
        })
    }

    SCSignup: any

    public LoginUser(data: any){
        console.log(JSON.stringify(data));
        alert(JSON.stringify(data))

        this.sc1.LoginUser(data).subscribe(
            res=>{this.SCSignup=res},
            err=>{this.SCSignup=err});
            alert(JSON.stringify(this.SCSignup))

            if(this.SCSignup === data.Contact  && data.Password ===this.SCSignup.Password)
            {
                alert('user logged in successfully')

            }
            else
            {
                alert('user logged failed')
            }
    }
}