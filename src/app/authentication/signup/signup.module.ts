import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignUpPage } from './sign-up-page.component';

import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignupPageRoutingModule,
        ReactiveFormsModule,
        BrowserModule
    ],
  declarations: [SignUpPage],
})
export class SignupPageModule {}
