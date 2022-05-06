import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'signup',
      loadChildren: () => import('./authentication/signup/signup.module').then( m => m.SignupPageModule)
    },
    {
      path: 'opVerification',
      loadChildren: () => import('./authentication/otp-verification/otp-verification.module').then( m => m.OtpVerificationModule)
    },
    {
      path: 'signin',
      loadChildren: () => import('./authentication/signin/signin.module').then( m => m.SigninPageModule)
    },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
