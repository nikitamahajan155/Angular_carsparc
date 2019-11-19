import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpwdComponent } from '../forgotpwd.component';

export const forgotpwdRoute: Routes=[
    {path: '', redirectTo: 'forgotpwd', pathMatch:'full'},
    { path: 'forgotpwd', component: ForgotpwdComponent}
]

@NgModule({
    declarations:[ForgotpwdComponent],
    imports:[RouterModule.forChild(forgotpwdRoute)],
    providers: [],
    exports: [ForgotpwdComponent]
})

export class ForgotpwdModule{

}