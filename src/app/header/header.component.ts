import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {ModalController} from "@ionic/angular";
import {SignInPage} from "../authentication/signin/sign-in-page.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit
{
  public headerTitle= 'Home';
  public authenticationIcon: string;

  constructor(public authenticationService: AuthenticationService, private modalController: ModalController)
  {

  }

  ngOnInit()
  {
    this.authenticationIcon = this.authenticationService.getIsAuthenticated() ? 'assets/icons/logout.png' : 'assets/icons/login.png';
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
