import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit
{
  public headerTitle= 'Home';
  public authenticationIcon: string;

  constructor(public authenticationService: AuthenticationService)
  {

  }

  ngOnInit()
  {
    this.authenticationIcon = this.authenticationService.getIsAuthenticated() ? 'assets/icons/logout.png' : 'assets/icons/login.png';
  }

}
