import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./authentication/authentication.service";
import {NavController} from "@ionic/angular";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit
{
  public currentBaseRoute = "home";

  constructor(private authenticationService: AuthenticationService, private router: Router)
  {

  }

  ngOnInit()
  {
    this.authenticationService.autoAuthenticateUser();

    this.router.events.subscribe
    (
      (routerEvent) =>
      {
        if (routerEvent instanceof NavigationEnd)
        {
          const activeRoute = routerEvent.urlAfterRedirects;

          if (activeRoute === '/home' || activeRoute === '')
          {
            this.currentBaseRoute = 'home';
          }
          else if (activeRoute === '/profile')
          {
            this.currentBaseRoute = 'profile';
          }
          else if (activeRoute === '/bookings')
          {
            this.currentBaseRoute = 'bookings';
          }
          else if (activeRoute === '/about')
          {
            this.currentBaseRoute = 'about';
          }
        }
      }
    );
  }
}
