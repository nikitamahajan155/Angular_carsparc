import { NgModule } from '@angular/core';
import { SignupComponent } from '../signup.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

export const signupRoute: Routes=[
    {path: '', redirectTo: 'signup', pathMatch:'full'},
    { path: 'signup', component: SignupComponent},
]

@NgModule({
    declarations:[SignupComponent],
    imports:[RouterModule.forChild(signupRoute), CommonModule, ReactiveFormsModule],
    providers:[],
    exports:[SignupComponent]
})

export class SignupModule{

}