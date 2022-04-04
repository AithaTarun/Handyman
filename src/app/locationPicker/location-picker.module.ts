import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {BrowserModule} from "@angular/platform-browser";
import {LocationPickerComponent} from "./location-picker.component";

@NgModule({
  declarations: [LocationPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class LocationPickerModule { }
