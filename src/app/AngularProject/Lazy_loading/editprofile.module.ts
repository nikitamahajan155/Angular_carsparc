import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from '../editprofile.component';
import { EditProfileService } from '../editprofile.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


export const editprofileRoute: Routes=[
    {path:'', redirectTo: 'edit', pathMatch:'full'},
    { path: '', component: EditprofileComponent}
]

@NgModule({
    declarations: [EditprofileComponent],
    imports: [RouterModule.forChild(editprofileRoute), CommonModule, ReactiveFormsModule],
    providers: [EditProfileService],
    exports: [EditprofileComponent]
})

export class EditprofileModule{

}