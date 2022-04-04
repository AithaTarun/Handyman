import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OtpVerificationPage} from "./otp-verification-page.component";

const routes: Routes =
  [
    {
      path: '',
      component: OtpVerificationPage
    }
  ];

@NgModule
(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  }
)
export class OtpVerificationRoutingModule
{

}
