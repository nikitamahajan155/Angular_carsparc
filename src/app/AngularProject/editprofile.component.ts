import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EditProfileService } from './editprofile.service';

@Component({
    selector: 'edit-comp',
    templateUrl: './editprofile.component.html',
    styleUrls: ['./editprofile.component.css'],
    providers: [EditProfileService]
})

export class EditprofileComponent{
EP: FormGroup

constructor(private EP1: EditProfileService){
    this.EP= new FormGroup({
        Id: new FormControl(3),
        FirmName: new FormControl(),
        OwnerName: new FormControl(),
        Contact: new FormControl(),
        Email: new FormControl(),
        Pincode: new FormControl(),
        Address: new FormControl(),
    })
}

EProfile: any
public editprofile(data: any){
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data))

    this.EP1.editprofile(data).subscribe(
        res=>{this.EProfile=res},
        err=>{this.EProfile=err});
        alert(JSON.stringify(this.EProfile))
}
}