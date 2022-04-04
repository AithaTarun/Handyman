import {Component, Input, OnInit} from '@angular/core';
import {IonInput, ModalController} from "@ionic/angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {isNumeric} from "rxjs/internal-compatibility";
import {AuthenticationService} from "../authentication.service";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {SignInPage} from "../signin/sign-in-page.component";

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification-page.component.html',
  styleUrls: ['./otp-verification-page.component.scss'],
})
export class OtpVerificationPage implements OnInit
{
  public remainingResendSeconds = 0;
  private resendOTPTimer = null;

  @Input() role: string;
  @Input() username: string;

  public formMessage = "";
  public messageColor = "";

  constructor(private modalController: ModalController, private authenticationService: AuthenticationService)
  {

  }

  form: FormGroup;

  ngOnInit()
  {
    this.form = new FormGroup
    (
      {
        // OTP 1
        'otp1': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required
              ]
          }
        ),

        // OTP 2
        'otp2': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required
              ]
          }
        ),

        // OTP 3
        'otp3': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required
              ]
          }
        ),

        // OTP 4
        'otp4': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required
              ]
          }
        )
      }
    );

    this.resetResendOTPTimer();
  }

  resetResendOTPTimer()
  {
    this.remainingResendSeconds = 120;

    this.resendOTPTimer = setInterval
    (
      () =>
      {
        if (this.remainingResendSeconds != 0)
        {
          this.remainingResendSeconds--;
        }
        else
        {
          clearInterval(this.resendOTPTimer)
        }
      }, 1000
    )
  }

  onDigitDown(inputEvent: KeyboardEvent, input: IonInput)
  {
    if (input.value.toString().length > 0 && inputEvent.key !== "Backspace")
    {
        inputEvent.preventDefault();
        inputEvent.stopPropagation();
    }
  }

  focusForward(inputEvent: KeyboardEvent, input: IonInput)
  {
    if (inputEvent.key !== "Backspace" &&  isNumeric(inputEvent.key))
    {
      input.setFocus();
    }
  }

  focusBack(input: IonInput)
  {
    input.setFocus();
  }

  onVerify()
  {
    const otp = this.form.get('otp1').value.toString() + this.form.get('otp2').value.toString() + this.form.get('otp3').value.toString() + this.form.get('otp4').value.toString();

    const verifyObservable: Observable<any> = this.authenticationService.verifyUser
    (
      this.role, this.username, otp
    );

    verifyObservable
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

          this.form.reset();

          this.openSignIn();
        }
      )
  }

  resendOTP()
  {
    if (this.remainingResendSeconds == 0)
    {
      const resendObservable: Observable<any> = this.authenticationService.resendOTP
      (
        this.role, this.username
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

            this.form.reset();

            this.resetResendOTPTimer();
          }
        );
    }
  }

  public async openSignIn()
  {
    await this.closeOTPVerification();

    const modal = await this.modalController.create
    (
      {
        component: SignInPage
      }
    );

    await modal.present();
  }

  async closeOTPVerification()
  {
    await this.modalController.dismiss(null, 'cancel');
  }
}
