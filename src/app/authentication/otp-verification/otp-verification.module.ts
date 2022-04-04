import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {OtpVerificationRoutingModule} from "./otp-verification-routing.module";

import {BrowserModule} from "@angular/platform-browser";

import {OtpVerificationPage} from "./otp-verification-page.component";

@NgModule
(
  {
    declarations: [OtpVerificationPage],

    imports:
      [
        CommonModule,
        FormsModule,
        IonicModule,
        OtpVerificationRoutingModule,
        ReactiveFormsModule,
        BrowserModule
      ]
})
export class OtpVerificationModule { }
