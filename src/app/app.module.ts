import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HeaderComponent} from "./header/header.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {Geolocation} from "@awesome-cordova-plugins/geolocation/ngx";
import {LocationPickerModule} from "./locationPicker/location-picker.module";
import {AuthenticationInterceptor} from "./authentication/authentication.interceptor";

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    entryComponents: [],
    imports: [
        BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
        LocationPickerModule
    ],
    providers:
        [
            {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
            Geolocation,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthenticationInterceptor,
                multi: true
            }
        ],
    bootstrap: [AppComponent],
    exports: [
    ]
})
export class AppModule {}
