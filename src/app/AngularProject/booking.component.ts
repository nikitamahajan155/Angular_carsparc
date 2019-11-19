import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'booking-comp',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
    providers: [BookingService]
})

export class BookingComponent{

constructor(private bc1:BookingService){}

public bookingInfo: any

public GetbookingInfo(){

    this.bc1.BookingUser().subscribe(
        res=>{this.bookingInfo=res},
        err=>{this.bookingInfo=err}
        
    )
    alert(JSON.stringify(this.bookingInfo))
}


public bookingmaintInfo: any
public GetbookingManitInfo(){

    this.bc1.BookingForMaintRecord().subscribe(
        res=>{this.bookingmaintInfo=res},
        err=>{this.bookingmaintInfo=err}
        
    )
    alert(JSON.stringify(this.bookingmaintInfo))
}
}

