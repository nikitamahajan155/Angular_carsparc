import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ServiceloginService{

constructor(private http: HttpClient){}

public ServiceLogin(data){

    let url="https://localhost:44339/api/login";
    return this.http.post(url,data)
}
}