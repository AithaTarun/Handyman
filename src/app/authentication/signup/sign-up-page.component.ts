import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";
import {SignInPage} from "../signin/sign-in-page.component";
import {LocationPickerComponent} from "../../locationPicker/location-picker.component";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {OtpVerificationPage} from "../otp-verification/otp-verification-page.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPage implements OnInit
{
  form: FormGroup;

  formMessage = '';
  messageColor = 'danger';

  selectedRole = "handyman";

  public states =
    [
      "Andaman and Nicobar Islands",
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chandigarh",
      "Chhattisgarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Delhi",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Ladakh",
      "Lakshadweep",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Puducherry",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal"
    ];

  constructor(private modalController: ModalController, private authenticationService: AuthenticationService) {}

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

        // First Name
        'first_name': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required,
                Validators.pattern('^[a-zA-Z \-\']+')
              ]
          }
        ),

        // Last Name
        'last_name': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required,
                Validators.pattern('^[a-zA-Z \-\']+')
              ]
          }
        ),

        // Email
        'email': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required,
                Validators.email
              ]
          }
        ),

        // Phone
        'phone': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required,
                Validators.pattern(/^[6-9]\d{9}$/),
                Validators.maxLength(10)
              ]
          }
        ),

        // Locality
        'locality': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required
              ]
          }
        ),

        // Landmark
        'landmark': new FormControl
        (
          ''
        ),

        // PIN Code
        'pin_code': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(6),
                Validators.pattern("^[1-9][0-9]{5}$")
              ]
          }
        ),

        // City/District/Town
        'city_district_town': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required
              ]
          }
        ),

        // State
        'state': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required
              ]
          }
        ),

        // Address
        'address_line': new FormControl
        (
          '',
          {
            validators:
              [
                Validators.required
              ]
          }
        ),
      }
    )
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

    // First Name Validation
    if (this.form.get('first_name').touched)
    {
      if (this.form.get('first_name').value.length == 0)
      {
        this.formMessage = 'First Name is required';
        this.messageColor = 'danger';
        return;
      }
      else if (this.form.get('first_name').invalid)
      {
        this.formMessage = 'Enter a valid first name';
        this.messageColor = 'danger';
        return;
      }
    }

    // Last Name Validation
    if (this.form.get('last_name').touched)
    {
      if (this.form.get('last_name').value.length == 0)
      {
        this.formMessage = 'Last Name is required';
        this.messageColor = 'danger';
        return;
      }
      else if (this.form.get('last_name').invalid)
      {
        this.formMessage = 'Enter a valid last name';
        this.messageColor = 'danger';
        return;
      }
    }

    // Email Validation
    if (this.form.get('email').touched)
    {
      if (this.form.get('email').value.length == 0)
      {
        this.formMessage = 'Email is required';
        this.messageColor = 'danger';
        return;
      }
      else if (this.form.get('email').invalid)
      {
        this.formMessage = 'Enter a valid mail address';
        this.messageColor = 'danger';
        return;
      }
    }

    // Phone Validation
    if (this.form.get('phone').touched)
    {
      if (this.form.get('phone').value.length == 0)
      {
        this.formMessage = 'Mobile number is required';
        this.messageColor = 'danger';
        return;
      }
      else if (this.form.get('phone').invalid)
      {
        this.formMessage = 'Enter valid mobile number';
        this.messageColor = 'danger';
        return;
      }
    }

    // Locality Validation
    if (this.form.get('locality').touched)
    {
      if (this.form.get('locality').value.length == 0)
      {
        this.formMessage = 'Locality is required';
        this.messageColor = 'danger';
        return;
      }
    }

    // PIN Validation
    if (this.form.get('pin_code').touched)
    {
      if (this.form.get('pin_code').value.length == 0)
      {
        this.formMessage = 'PIN Code is required';
        this.messageColor = 'danger';
        return;
      }
      else if (this.form.get('pin_code').invalid)
      {
        this.formMessage = 'Enter valid pin code';
        this.messageColor = 'danger';
        return;
      }
    }

    // City/District/Town Validation
    if (this.form.get('city_district_town').touched)
    {
      if (this.form.get('city_district_town').value.length == 0)
      {
        this.formMessage = 'City/District/Town is required';
        this.messageColor = 'danger';
        return;
      }
    }

    // State Validation
    if (this.form.get('state').touched)
    {
      if (this.form.get('state').value.length == 0)
      {
        this.formMessage = 'State is required';
        this.messageColor = 'danger';
        return;
      }
    }

    // Address Validation
    if (this.form.get('address_line').touched)
    {
      if (this.form.get('address_line').value.length == 0)
      {
        this.formMessage = 'Address line is required';
        this.messageColor = 'danger';
        return;
      }
    }
  }

  onSignUp()
  {
    this.formMessage = '';
    this.messageColor = 'success';

    if (this.form.invalid)
    {
      return;
    }

    const createUserObservable: Observable<any> = this.authenticationService.createUser
    (
      this.selectedRole,
      this.form.get('username').value,
      this.form.get('password').value,
      this.form.get('first_name').value,
      this.form.get('last_name').value,
      this.form.get('email').value,
      this.form.get('phone').value,
      this.form.get('locality').value,
      this.form.get('landmark').value,
      this.form.get('pin_code').value,
      this.form.get('city_district_town').value,
      this.form.get('state').value,
      this.form.get('address_line').value,
    );

    createUserObservable
      .subscribe
      (
        (response: any) =>
        {
          this.formMessage = "User created successfully";
          this.messageColor = 'success';
          this.form.reset();

          this.openOTPVerification(this.selectedRole, response.result.username);
        },

        (error: any) =>
        {
          console.log("Occurred Error : ", error);

          const errorMessages: string[] = error.error.message;

          console.log(errorMessages);

          errorMessages.every
          (
            (message) =>
            {
              if (message === 'username')
              {
                this.formMessage = "Username already taken";
                this.messageColor = 'danger';
                this.form.get('username').setErrors({'incorrect': true});

                return false;
              }
              else if (message === 'email')
              {
                this.formMessage = "Email already taken";
                this.messageColor = 'danger';
                this.form.get('email').setErrors({'incorrect': true});

                return false;
              }
              else if (message === 'phone')
              {
                this.formMessage = "Mobile number already taken";
                this.messageColor = 'danger';
                this.form.get('phone').setErrors({'incorrect': true});

                return false;
              }
            }
          )

          return throwError('Error occurred');
        }
      )
  }

  public async openOTPVerification(role: string, username: string)
  {
    await this.closeSignUp();

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

  public async closeSignUp()
  {
    await this.modalController.dismiss(null, 'cancel');
  }

  public onRoleChange(event: any)
  {
    this.selectedRole = event.detail.value;
  }

  public async openSignIn()
  {
    await this.closeSignUp();

    const modal = await this.modalController.create
    (
      {
        component: SignInPage
      }
    );

    await modal.present();
  }

  public async openMap()
  {

    const modal = await this.modalController.create
    (
      {
        component: LocationPickerComponent
      }
    );

    await modal.present();

    const selectedFeature = await modal.onWillDismiss();

    if (selectedFeature.data)
    {
      const context = selectedFeature.data.context;

      context.forEach
      (
        (c) =>
        {
          if (c.id.includes('region')) // State
          {
            this.form.get('state').setValue(c.text);
          }
          else if (c.id.includes('postcode'))
          {
            this.form.get('pin_code').setValue(c.text);
          }
          else if (c.id.includes('district'))
          {
            this.form.get('city_district_town').setValue(c.text);
          }
          else if (c.id.includes('place') || c.id.includes('locality'))
          {
            this.form.get('locality').setValue(c.text);
          }
          else if (c.id.includes('poi'))
          {
            this.form.get('landmark').setValue(c.text);
          }
        }
      );

      this.form.get('address_line').setValue(selectedFeature.data.place_name);
    }
  }
}
