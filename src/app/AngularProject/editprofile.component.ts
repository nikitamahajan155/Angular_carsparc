import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
        FirmName: new FormControl('',[Validators.required]),
        OwnerName: new FormControl('',[Validators.required]),
        Contact: new FormControl('',[Validators.required,Validators.pattern('^[789][0-9]{9}')]),
        Email: new FormControl('',[Validators.required,Validators.pattern('^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$')]),
        Pincode: new FormControl('',[Validators.required,Validators.pattern('[0-9]{6}|[0-9]{3}\s[0-9]{3}')]),
        Address: new FormControl('',[Validators.required]),
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