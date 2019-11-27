import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupbuttonComponent } from '../signupbutton.component';
import { CommonModule } from '@angular/common';

export const signupbuttonRoute: Routes=[
    {path: '', redirectTo: 'button', pathMatch:'full'},
    { path: '', component: SignupbuttonComponent}
]

@NgModule({
    declarations:[SignupbuttonComponent],
    imports:[RouterModule.forChild(signupbuttonRoute), CommonModule],
    providers: [],
    exports: [SignupbuttonComponent]
})

export class SignupbuttonModule{

}