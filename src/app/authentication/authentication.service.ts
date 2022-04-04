import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable
({
  providedIn: 'root'
})
export class AuthenticationService
{
  private isAuthenticated = false;

  private BACKEND_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient)
  {

  }

  public getIsAuthenticated()
  {
    return this.isAuthenticated;
  }

  createUser(role: string,
             username: string,
             password: string,
             first_name: string,
             last_name: string,
             email: string,
             phone: string,
             locality: string,
             landmark: string,
             pin_code: number,
             city_district_town: string,
             state: string,
             address_line: string
            ): Observable<any>
  {
    const userData = {role, username, password, first_name, last_name, email, phone, locality, landmark,  pin_code, city_district_town, state, address_line};

    return this.http.post
    (
      this.BACKEND_URL+ '/user/signup',
      userData
    );
  }

  verifyUser(role: string, username: string, otp: number): Observable<any>
  {
    const verificationData = {role, username, otp};

    return this.http.post
    (
      this.BACKEND_URL+ '/user/verify',
      verificationData
    );
  }

  resendOTP(role: string, username: string): Observable<any>
  {
    const data = {role, username};

    return this.http.post
    (
      this.BACKEND_URL+ '/user/resendOTP',
      data
    );
  }

  loginUser(role: string, username: string, password: string,): Observable<any>
  {
    const userData = {role, username, password};

    return this.http.post
    (
      this.BACKEND_URL+ '/user/signin',
      userData
    );
  }
}
