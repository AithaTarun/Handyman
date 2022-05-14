import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ModalController} from "@ionic/angular";
import {catchError} from "rxjs/operators";

@Injectable
({
  providedIn: 'root'
})
export class AuthenticationService
{
  private token: string;
  private authenticationStatusListener : Subject<boolean> = new Subject<boolean>();

  private isAuthenticated = false;

  private tokenTimer: any;

  private BACKEND_URL = environment.BACKEND_URL;

  private currentUser: any;
  private userChangeListener : Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private modalController: ModalController)
  {

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

  loginUser(role: string, username: string, password: string, remember: boolean): Observable<any>
  {
    const userData = {role, username, password, remember};

    return this.http.post
    (
      this.BACKEND_URL+ '/user/signin',
      userData
    );
  }

  async login(response)  // Called after user has successfully logged in.
  {
    this.token = response.token;
    if (this.token)
    {
      const expiresInDuration = response.expiresIn;
      this.setAuthenticationTimer(expiresInDuration);

      this.authenticationStatusListener.next(true);
      this.isAuthenticated = true;

      const now = new Date();
      const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);

      AuthenticationService.saveAuthenticationData(this.token, expirationDate);

      await this.fetchUserDetails();

      await this.modalController.dismiss(null, 'cancel');
    }
  }

  getAuthStatusListener()
  {
    return this.authenticationStatusListener.asObservable();
  }

  getUserChangeListener()
  {
    return this.userChangeListener.asObservable();
  }

  public setCurrentUser(currentUser)
  {
    this.currentUser = currentUser;
    this.userChangeListener.next(this.currentUser);
  }

  getIsAuthenticated()
  {
    return this.isAuthenticated;
  }

  logout()
  {
    this.token = null;
    this.isAuthenticated = false;

    this.authenticationStatusListener.next(false);
    this.userChangeListener.next(null);

    clearTimeout(this.tokenTimer);

    AuthenticationService.clearAuthenticationData();

    this.currentUser = null;
  }

  private static saveAuthenticationData(token: string, expirationDate: Date)
  {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private static clearAuthenticationData()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  async autoAuthenticateUser()
  {
    const authInformation = AuthenticationService.getAuthenticationData();

    if (!authInformation)
    {
      return;
    }

    const now = new Date();

    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();

    if (expiresIn > 0)
    {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthenticationTimer(expiresIn / 1000);

      this.authenticationStatusListener.next(true);

      await this.fetchUserDetails();
    }
  }

  private static getAuthenticationData()
  {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');

    if (!token || !expirationDate)
    {
      return;
    }

    return {
      token,
      expirationDate : new Date(expirationDate),
    }
  }

  private setAuthenticationTimer(duration: number)
  {
    this.tokenTimer = setTimeout
    (
      () =>
      {
        this.logout();
      },
      duration * 1000 // Seconds -> Milliseconds.
    );
  }

  public getToken()
  {
    return this.token;
  }

  public getCurrentUser()
  {
    return this.currentUser;
  }

  public updateUser(first_name: string,
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
    const userData = {first_name, last_name, email, phone, locality, landmark,  pin_code, city_district_town, state, address_line};

    return this.http.post
    (
      this.BACKEND_URL+ '/user/update',
      userData
    );
  }

  async fetchUserDetails()
  {
    await this.http.get
    (
      this.BACKEND_URL + '/user/fetch'
    )
      .subscribe
      (
        (response: any) =>
        {
          this.currentUser = response.user;
          this.userChangeListener.next(this.currentUser);
        },

        async (error: any) =>
        {
          console.log("Error while fetching user details : ", error);

          return throwError('Error occurred');
        }
      )
  }
}
