import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {ModalController} from "@ionic/angular";
import {SignInPage} from "../authentication/signin/sign-in-page.component";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit
{
  public headerTitle= 'Home';
  public authenticationIcon: string;

  constructor(public authenticationService: AuthenticationService, private modalController: ModalController, private router: Router)
  {

  }

  ngOnInit()
  {
    this.authenticationService.getAuthStatusListener().subscribe
    (
      (isAuthenticated) =>
      {
        this.authenticationIcon = isAuthenticated ? 'assets/icons/logout.png' : 'assets/icons/login.png';
      }
    );

    this.authenticationIcon = this.authenticationService.getIsAuthenticated() ? 'assets/icons/logout.png' : 'assets/icons/login.png';

    this.router.events.subscribe
    (
      (routerEvent) =>
      {
        if (routerEvent instanceof NavigationEnd)
        {
          const activeRoute = routerEvent.urlAfterRedirects;

          if (activeRoute === '/home' || activeRoute === '')
          {
            this.headerTitle = 'Home';
          }
          else if (activeRoute === '/profile')
          {
            this.headerTitle = 'Profile';
          }
          else if (activeRoute === '/bookings')
          {
            this.headerTitle = 'Bookings';
          }
          else if (activeRoute === '/about')
          {
            this.headerTitle = 'About';
          }
        }
      }
    );
  }

  public async onAuthenticationModalOpen()
  {
    const modal = await this.modalController.create
    (
      {
        component: SignInPage
      }
    );

    await modal.present();
  }
}
