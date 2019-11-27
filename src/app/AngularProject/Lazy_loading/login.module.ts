import { NgModule } from '@angular/core';
import { LoginComponent } from '../login.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


export const loginRoute: Routes=[
    {path: '', redirectTo: 'login', pathMatch:'full'},
    { path: '', component: LoginComponent}]

@NgModule({
    declarations:[LoginComponent],
    imports:[RouterModule.forChild(loginRoute), ReactiveFormsModule,FormsModule, CommonModule],
    providers: [],
    exports: [LoginComponent]
})

export class LoginModule{

}