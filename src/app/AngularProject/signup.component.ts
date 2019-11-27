import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { compareValidator } from '../Shared/compare-validators.directive';

@Component({
    selector: 'signup-comp',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [SignupService]
})

export class SignupComponent{

    SC: FormGroup
    constructor(private sc1: SignupService){
        this.SC= new FormGroup({
            Id: new FormControl(0),
            FirmName: new FormControl('', Validators.required),
            OwnerName: new FormControl('', Validators.required),
            Contact: new FormControl('',[ Validators.required,Validators.pattern('^[789][0-9]{9}')]),
            Email: new FormControl('', [Validators.required]),
            Password: new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),
            ConfirmPassword: new FormControl('', [Validators.required,compareValidator('Password')]),
            Pincode: new FormControl('',[Validators.required,Validators.pattern('^[1-9][0-9][0-9][0-9][0-9][0-9]$')]),
            Address: new FormControl('', Validators.required)
        })  
    }
    get Password() {
        return this.SC.get('Password');
    }
    get ConfirmPassword() {
        return this.SC.get('ConfirmPassword');
    }
    SCSignup: any
    
    public SignupUser(data: any)
    {
        console.log(JSON.stringify(data));
        alert(JSON.stringify(data))

        this.sc1.SignupUser(data).subscribe(
            res=>{this.SCSignup=res},
            err=>{this.SCSignup=err});
            alert(JSON.stringify(this.SCSignup))
    }
}