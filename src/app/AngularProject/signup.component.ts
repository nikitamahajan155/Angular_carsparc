import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

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
            Contact: new FormControl('', Validators.required),
            Email: new FormControl('', Validators.required),
            Password: new FormControl('', Validators.required),
            ConfirmPassword: new FormControl('', Validators.required),
            Pincode: new FormControl(''),
            Address: new FormControl('', Validators.required)
        })
    }

    SCSignup: any

    public SignupUser(data: any){
        console.log(JSON.stringify(data));
        alert(JSON.stringify(data))

        this.sc1.SignupUser(data).subscribe(
            res=>{this.SCSignup=res},
            err=>{this.SCSignup=err});
            alert(JSON.stringify(this.SCSignup))
    }
}