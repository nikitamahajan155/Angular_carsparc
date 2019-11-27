import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { LoginService } from './LoginService.service';

@Component({
    selector: 'signup-comp',
    templateUrl: './frontpage.component.html',
    styleUrls: ['./frontpage.component.css'],
    providers: [LoginService]
})

export class FrontpageComponent{

   
}