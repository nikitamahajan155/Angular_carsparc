import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class EditProfileService{
constructor(private http: HttpClient){}

public editprofile(data:any){
    let url="https://localhost:44374/api/editprofile";
    return this.http.put(url,data)
}
}