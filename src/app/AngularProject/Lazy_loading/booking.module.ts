import { NgModule } from '@angular/core';
import { BookingComponent } from '../booking.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

export const bookingroute: Routes=[
    {path: '', redirectTo: 'booking', pathMatch:'full'},
    { path: 'booking', component: BookingComponent}
]


@NgModule({
    declarations:[BookingComponent],
    imports:[RouterModule.forChild(bookingroute), CommonModule, ReactiveFormsModule],
    providers:[],
    exports:[BookingComponent]
})

export class BookingModule{

}