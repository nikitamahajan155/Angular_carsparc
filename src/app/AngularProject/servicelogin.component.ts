import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceloginService } from './servicelogin.service';


@Component({
    selector: 'servicelogin-comp',
    templateUrl: './servicelogin.component.html',
    styleUrls: ['./servicelogin.component.css'],
    providers: [ServiceloginService]
})

export class ServiceloginComponent{
 login: FormGroup

 constructor(private login1: ServiceloginService){
     this.login= new FormGroup({
         Id: new FormControl(0),
         Mobile: new FormControl(''),
         Password: new FormControl('')
     })
 }

SLogin: any

public ServiceLogin(data: any){
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data))

    this.login1.ServiceLogin(data).subscribe(
        res=>{this.SLogin=res},
        err=>{this.SLogin=err});

        alert(JSON.stringify(this.SLogin))
}

}