import { Injectable } from '@angular/core';

@Injectable
({
  providedIn: 'root'
})
export class AuthenticationService
{
  private isAuthenticated = false;

  constructor()
  {

  }

  public getIsAuthenticated()
  {
    return this.isAuthenticated;
  }
}
