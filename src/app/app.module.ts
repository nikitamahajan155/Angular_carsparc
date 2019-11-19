import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarmasterComponent } from './AngularProject/carmaster.component';
import { SignupbuttonComponent } from './AngularProject/signupbutton.component';
import { OtpComponent } from './AngularProject/otp.component';
import { ServiceloginComponent } from './AngularProject/servicelogin.component';
import { DashboardComponent } from './AngularProject/dashboard.component';
import { BookingComponent } from './AngularProject/booking.component';
import { EditprofileComponent } from './AngularProject/editprofile.component';
import { ChangepwdComponent } from './AngularProject/changepwd.component';
import { FrontpageComponent } from './AngularProject/frontpage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CarRoute } from './AngularProject/Routing/routecar.config';
import { AllrecordComponent } from './AngularProject/allrecords.component';
import { BookingformaintenanceComponent } from './AngularProject/bookingformaintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    CarmasterComponent,
    // SignupbuttonComponent,
    // OtpComponent,
    ServiceloginComponent,
    DashboardComponent,
    // BookingComponent,
    // EditprofileComponent,
    // ChangepwdComponent,
    FrontpageComponent,
    BookingformaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(CarRoute)
  ],
  providers: [],
  bootstrap: [CarmasterComponent]
})
export class AppModule { }
