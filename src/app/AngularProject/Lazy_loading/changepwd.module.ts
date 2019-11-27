import { NgModule } from '@angular/core';
import { ChangepwdComponent } from '../changepwd.component';
import { RouterModule, Routes } from '@angular/router';


export const changepwdRoute: Routes=[
    {path: '', redirectTo: 'changepwd', pathMatch:'full'},
    { path: '', component: ChangepwdComponent}
]

@NgModule({
    declarations: [ChangepwdComponent],
    imports: [RouterModule.forChild(changepwdRoute)],
    providers: [],
    exports: [ChangepwdComponent]
})

export class ChangepwdModule{

}