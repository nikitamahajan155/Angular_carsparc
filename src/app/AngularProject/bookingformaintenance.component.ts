import { Component, OnInit } from '@angular/core';
import { BookingForMaintenanceService } from './bookingformaintenance.service';

@Component({
  selector: 'app-bookingformaintenance',
  templateUrl: './bookingformaintenance.component.html',
  styleUrls: ['./bookingformaintenance.component.css']
})
export class BookingformaintenanceComponent{

  constructor(private BM:BookingForMaintenanceService){}

  public bookingMaintInfo: any
  
  public GetbookingMaintInfo(){
  
      this.BM.BookingMaintenance().subscribe(
          res=>{this.bookingMaintInfo=res},
          err=>{this.bookingMaintInfo=err}
          
      )
      alert(JSON.stringify(this.bookingMaintInfo))
  }
}
