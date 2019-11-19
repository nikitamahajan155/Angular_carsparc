import { Component } from '@angular/core';
import { AllrecordService } from './allrecords.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RouteGuardService } from './Lazy_loading/routeguard.service';

@Component({
    selector: 'allrecord-app',
    templateUrl: './allrecords.component.html',
    providers: [AllrecordService, RouteGuardService]
})

export class AllrecordComponent {
    AL: any
    constructor(private a1: AllrecordService) {
        this.AL = new FormGroup({
            Id: new FormControl()
        })
    }

    public AllInfo: any

    public GetAllInfo() {

        this.a1.AllRecords().subscribe(
            res => { this.AllInfo = res },
            err => { this.AllInfo = err }

        )
        alert(JSON.stringify(this.AllInfo))
    }

    public InfoById: any
    public Id: Number
    public GetById() {
        this.Id = this.AL.value.Id;
        this.a1.GetRecordsById(this.Id).subscribe(res => {
            this.InfoById = res
            alert(JSON.stringify(this.InfoById))
        }, err => {
            this.InfoById = err
        });

    }
}