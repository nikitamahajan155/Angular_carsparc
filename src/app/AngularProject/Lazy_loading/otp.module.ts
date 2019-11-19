import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpComponent } from '../otp.component';

export const otpRoute: Routes=[
    {path: '', redirectTo: 'otp', pathMatch:'full'},
    { path: 'otp', component: OtpComponent}
]

@NgModule({
    declarations:[OtpComponent],
    imports:[RouterModule.forChild(otpRoute)],
    providers: [],
    exports: [OtpComponent]
})

export class OtpModule{

}