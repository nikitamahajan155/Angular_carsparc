import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class BookingForMaintenanceService{

constructor (private http: HttpClient){}




public BookingMaintenance(){
    let url='';
    return this.http.get(url)
    
}
}

