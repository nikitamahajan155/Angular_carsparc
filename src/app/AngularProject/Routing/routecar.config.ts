import { Routes } from '@angular/router';
import { ServiceloginComponent } from '../servicelogin.component';
import { DashboardComponent } from '../dashboard.component';
import { FrontpageComponent } from '../frontpage.component';
import { BookingformaintenanceComponent } from '../bookingformaintenance.component';


export const CarRoute: Routes = [
    {path:'', component: FrontpageComponent, children:[    
    // {path: 'login', component: LoginComponent},
    {path: 'login', loadChildren: '../Lazy_loading/login.module#LoginModule'},
    // {path: 'signup', component: SignupComponent},
    {path: 'signup', loadChildren: '../Lazy_loading/signup.module#SignupModule'},
    {path: 'button', loadChildren: '../Lazy_loading/signupbutton.module#SignupbuttonModule'},
    {path: 'otp', loadChildren: '../Lazy_loading/otp.module#OtpModule'},
    {path: 'forgotpwd', loadChildren: '../Lazy_loading/forgotpwd.module#ForgotpwdModule'},
    {path: 'servicelogin', component: ServiceloginComponent}]},
    {path: 'dashboard', component: DashboardComponent, 
    children:[
        {path: 'booking', loadChildren: '../Lazy_loading/booking.module#BookingModule'},
        {path: 'edit', loadChildren: '../Lazy_loading/editprofile.module#EditprofileModule'},
        {path: 'changepwd', loadChildren: '../Lazy_loading/changepwd.module#ChangepwdModule'},
        {path: 'allrecord', loadChildren: '../Lazy_loading/allrecord.module#AllrecordModule'}]
},
{path: 'maintenance', component: BookingformaintenanceComponent}
    // {path:'booking', component: BookingComponent},
    // {path: 'edit', component: EditprofileComponent},
    // {path: 'changepwd', component: ChangepwdComponent}
    
]