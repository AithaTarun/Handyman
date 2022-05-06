import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";

@NgModule
(
  {
    imports:
      [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        NgxExtendedPdfViewerModule
      ],

  declarations: [ProfilePage],
  }
)

export class ProfilePageModule {}
