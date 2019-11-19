import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingForMaintenanceService } from './bookingformaintenance.service';


@Injectable()

export class BookingService{

constructor (private http: HttpClient){}


public BookingUser(){
    let url='https://localhost:44374/api/booking';
    return this.http.get(url)
    
}


public BookingForMaintRecord(){
    let url="";
    return this.http.get(url)
}
}

