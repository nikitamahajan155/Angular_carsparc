import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LoginService{

constructor (private http: HttpClient){}

public LoginUser(data){
    let url='https://localhost:44371/api/login';
    return this.http.post(url,data)
}

}