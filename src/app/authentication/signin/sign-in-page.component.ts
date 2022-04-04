import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalController} from "@ionic/angular";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {OtpVerificationPage} from "../otp-verification/otp-verification-page.component";
import {SignUpPage} from "../signup/sign-up-page.component";

@Component
(
  {
    selector: 'app-sign-in',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss'],
  }
)
export class SignInPage implements OnInit
{
  form: FormGroup;

  formMessage = "";
  messageColor = "danger";

  selectedRole = "handyman";

  constructor(private modalController: ModalController, private authenticationService: AuthenticationService)
  { }

  ngOnInit()
  {
    this.form = new FormGroup
    (
      {
        // Username
        'username': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(10)
              ]
          }
        ),

        // Password
        'password': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(10)
              ]
          }
        ),
      }
    );
  }

  onFormChange()
  {
    this.formMessage = '';
    this.messageColor = 'success';

    // Username validation
    if (this.form.get('username').touched)
    {
      if (this.form.get('username').value.length === 0)
      {
        this.formMessage = 'Username is required';
        this.messageColor = 'danger';
        return;
      }
      else if (this.form.get('username').value.length < 5 || this.form.get('username').value.length > 10)
      {
        this.formMessage = 'Username length should in between 5 and 10';
        this.messageColor = 'danger';
        return;
      }
    }

    // Password validation
    if (this.form.get('password').touched)
    {
      if (this.form.get('password').value.length === 0)
      {
        this.formMessage = 'Password is required';
        this.messageColor = 'danger';
        return;
      }
      else if (this.form.get('password').value.length < 5 || this.form.get('password').value.length > 10)
      {
        this.formMessage = 'Password length should in between 5 and 10';
        this.messageColor = 'danger';
        return;
      }
    }
  }

  onSignIn()
  {
    this.formMessage = '';
    this.messageColor = 'success';

    if (this.form.invalid)
    {
      return;
    }

    const loginUserObservable: Observable<any> = this.authenticationService.loginUser
    (
      this.selectedRole,
      this.form.get('username').value,
      this.form.get('password').value,
    );

    loginUserObservable
      .pipe
      (
        catchError
        (
          (error: any) =>
          {
            console.log("Occurred Error : ", error);

            this.formMessage = error.error.message;
            this.messageColor = 'danger';

            if (error.error.message === "Account not verified")
            {
              const resendObservable: Observable<any> = this.authenticationService.resendOTP
              (
                this.selectedRole, this.form.get('username').value
              );

              resendObservable
                .pipe
                (
                  catchError
                  (
                    (error: any) =>
                    {
                      console.log("Occurred Error : ", error);

                      this.formMessage = error.error.message;
                      this.messageColor = 'danger';

                      return throwError('Error occurred');
                    }
                  )
                )
                .subscribe
                (
                  (response: any) =>
                  {
                    this.formMessage = response.message;
                    this.messageColor = 'success';

                    this.openOTPVerification(this.selectedRole, this.form.get('username').value);

                    this.form.reset();
                  }
                );
            }

            return throwError('Error occurred');
          }
        )
      )
      .subscribe
      (
        (response: any) =>
        {
          this.formMessage = "User logged in successfully";
          this.messageColor = 'success';
          this.form.reset();

          this.closeSignIn();
        }
      )

  }

  public async openOTPVerification(role: string, username: string)
  {
    await this.closeSignIn();

    const modal = await this.modalController.create
    (
      {
        component: OtpVerificationPage,
        componentProps:
          {
            role,
            username
          }
      }
    );

    await modal.present();
  }

  public onClearForm()
  {
    this.form.reset();
  }

  public async closeSignIn()
  {
    await this.modalController.dismiss(null, 'cancel');
  }

  public onRoleChange(event: any)
  {
    this.selectedRole = event.detail.value;
  }

  public async openSignUp()
  {
    await this.closeSignIn();

    const modal = await this.modalController.create
    (
      {
        component: SignUpPage
      }
    );

    await modal.present();
  }
}
