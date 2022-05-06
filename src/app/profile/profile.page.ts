import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {IonSelect, ModalController, NavController, ToastController} from "@ionic/angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FileManagementService} from "./file-management.service";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {ProfileData} from "./profile.data";
import {LocationPickerComponent} from "../locationPicker/location-picker.component";

@Component
(
  {
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss']
  }
)
export class ProfilePage implements OnInit
{
  @ViewChild('uploadFiles') uploadFiles: any;

  public visible = false;

  public aadhaarCardSrc = undefined;
  public panCardSrc = undefined;
  public skillCertificatesSrc = undefined;
  public previousEmployerDocumentsSrc = undefined;

  public currentDocument = "Aadhaar Card";
  public currentDocumentSRC = this.aadhaarCardSrc;

  ionViewDidEnter()
  {
    this.visible = true;
  }

  public currentProfileData: ProfileData =
    {
      avatar: {id: null, url: null},
      aadhaarCard: {id: null, url: null},
      panCard: {id: null, url: null},
      skillCertificates: {id: null, url: null},
      previousEmployerDocuments: {id: null, url: null}
    };

  public currentUser;

  public avatarUploading = false;

  // User details
  form: FormGroup;

  formMessage = '';
  messageColor = 'danger';

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

  constructor(private authenticationService: AuthenticationService,
              private navController: NavController,
              private fileManagement: FileManagementService,
              private toastController: ToastController,
              private modalController: ModalController
            )
  {}

  async ionViewWillEnter()
  {
    if (!this.authenticationService.getIsAuthenticated())
    {
      await this.navController.navigateRoot('/home');
    }
  }

  async ngOnInit()
  {
    this.authenticationService.getAuthStatusListener().subscribe
    (
      async (isAuthenticated) =>
      {
        if (!isAuthenticated)
        {
          this.currentProfileData = null;
          this.currentUser = null;

          await this.navController.navigateRoot('/home');
        }
        else
        {
          this.fetchUserProfile();
        }
      }
    );

    this.authenticationService.getUserChangeListener()
      .subscribe
      (
        (currentUser) =>
        {
          this.currentUser = currentUser;
        }
      );

    this.currentUser = this.authenticationService.getCurrentUser();
    this.fetchUserProfile();

    this.form = new FormGroup
    (
      {
        // Username
        'username': new FormControl
        (
          {
            value: this.currentUser.username,
            disabled: true
          }
        ),

        // First Name
        'first_name': new FormControl
        (
          this.currentUser.first_name,
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
          this.currentUser.last_name,
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
          {
            value: this.currentUser.email,
            disabled: true
          }
        ),

        // Phone
        'phone': new FormControl
        (
          this.currentUser.phone,
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
          this.currentUser.address.locality,
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
          this.currentUser.address.landmark || ""
        ),

        // PIN Code
        'pin_code': new FormControl
        (
          this.currentUser.address.pin_code,
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
          this.currentUser.address.city_district_town,
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
          this.currentUser.address.state,
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
          this.currentUser.address.address_line,
          {
            validators:
              [
                Validators.required
              ]
          }
        ),
      }
    );
  }

  public fetchUserProfile()
  {
    this.fileManagement.fetchProfile()
      .pipe<any>
      (
        catchError
        (
          async (error: any) =>
          {
            console.log("Occurred Error : ", error);

            const toast = await this.toastController.create
            (
              {
                message: "Error while fetching profile",
                duration: 2000,
                color: "danger",
                icon: 'bug'
              }
            );
            await toast.present();

            return throwError('Error occurred');
          }
        )
      )
      .subscribe
      (
        async (response) =>
        {
          if (response.buffers['aadhaarCard'] !== undefined)
          {
            this.aadhaarCardSrc = ProfilePage.toArrayBuffer(response.buffers.aadhaarCard.data);
          }

          if (response.buffers['panCard'] !== undefined)
          {
            this.panCardSrc = ProfilePage.toArrayBuffer(response.buffers.panCard.data);
          }

          if (response.buffers['skillCertificates'] !== undefined)
          {
            this.skillCertificatesSrc = ProfilePage.toArrayBuffer(response.buffers.skillCertificates.data);
          }

          if (response.buffers['previousEmployerDocuments'] !== undefined)
          {
            this.previousEmployerDocumentsSrc = ProfilePage.toArrayBuffer(response.buffers.previousEmployerDocuments.data);
          }

          this.currentDocumentSRC = this.aadhaarCardSrc;
          this.currentProfileData = response.profile;
        }
      );
  }

  private static toArrayBuffer(buf)
  {
    const ab = new ArrayBuffer(buf.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i)
    {
      view[i] = buf[i];
    }
    return ab;
  }

  public avatarChanged(event)
  {
    this.avatarUploading = true;

    this.fileManagement.uploadFile
    (
      event.target.files.item(0), "avatar"
    )
      .pipe<any>
      (
        catchError
        (
          async (error: any) =>
          {
            console.log("Occurred Error : ", error);

            const toast = await this.toastController.create
            (
              {
                message: "Error while updating avatar",
                duration: 2000,
                color: "danger",
                icon: 'bug'
              }
            );
            await toast.present();

            this.avatarUploading = false;

            return throwError('Error occurred');
          }
        )
      )
      .subscribe
      (
        async (response) =>
        {
          const toast = await this.toastController.create
          (
            {
              message: "Successfully updated avatar",
              duration: 2000,
              color: "success",
              icon: 'checkmark-done-outline'
            }
          );

          await toast.present();

          this.avatarUploading = false;

          this.currentProfileData = response.profile;
        }
      )
  }

  public documentChanged(event, documentSelector: IonSelect)
  {
    const documentType = documentSelector.value;
    const documentName = this.currentDocument;

    this.fileManagement.uploadFile
    (
      event.target.files.item(0), documentType
    )
      .pipe<any>
      (
        catchError
        (
          async (error: any) =>
          {
            console.log("Occurred Error : ", error);

            const toast = await this.toastController.create
            (
              {
                message: "Error while updating " + documentName,
                duration: 2000,
                color: "danger",
                icon: 'bug'
              }
            );
            await toast.present();

            return throwError('Error occurred');
          }
        )
      )
      .subscribe
      (
        async (response) =>
        {
          const toast = await this.toastController.create
          (
            {
              message: "Successfully updated " + documentName,
              duration: 2000,
              color: "success",
              icon: 'checkmark-done-outline'
            }
          );

          await toast.present();

          if (documentType === 'aadhaarCard')
          {
            this.aadhaarCardSrc = ProfilePage.toArrayBuffer(response.buffers.aadhaarCard.data);
            this.currentDocumentSRC = this.aadhaarCardSrc;
          }
          else if (documentType === 'panCard')
          {
            this.panCardSrc = ProfilePage.toArrayBuffer(response.buffers.panCard.data);
            this.currentDocumentSRC = this.panCardSrc;
          }
          else if (documentType === 'skillCertificates')
          {
            this.skillCertificatesSrc = ProfilePage.toArrayBuffer(response.buffers.skillCertificates.data);
            this.currentDocumentSRC = this.skillCertificatesSrc;
          }
          else if (documentType === 'previousEmployerDocuments')
          {
            this.previousEmployerDocumentsSrc = ProfilePage.toArrayBuffer(response.buffers.previousEmployerDocuments.data);
            this.currentDocumentSRC = this.previousEmployerDocumentsSrc;
          }

          this.currentProfileData = response.profile;
        }
      )
  }

  onFormChange()
  {
    this.formMessage = '';
    this.messageColor = 'success';

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

  onUserDetailsUpdate()
  {
    this.formMessage = '';
    this.messageColor = 'success';

    if (this.form.invalid)
    {
      return;
    }

    const updateUserObservable: Observable<any> = this.authenticationService.updateUser
    (
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

    updateUserObservable
      .pipe
      (
        catchError
        (
          async (error: any) =>
          {
            console.log("Occurred Error : ", error);

            const errorMessages: string[] = error.error.message;

            console.log(errorMessages);

            errorMessages.every
            (
              (message) =>
              {
                if (message === 'phone')
                {
                  this.formMessage = "Mobile number already taken";
                  this.messageColor = 'danger';
                  this.form.get('phone').setErrors({'incorrect': true});

                  return false;
                }
              }
            );

            const toast = await this.toastController.create
            (
              {
                message: "Error while updating details",
                duration: 2000,
                color: "danger",
                icon: 'bug'
              }
            );

            await toast.present();

            return throwError('Error occurred');
          }
        )
      )
      .subscribe
      (
        async (response: any) =>
        {
          const toast = await this.toastController.create
          (
            {
              message: "Updated details successfully",
              duration: 2000,
              color: "success",
              icon: 'checkmark-done-outline'
            }
          );

          await toast.present();

          this.authenticationService.setCurrentUser(response.user);
        }
      )
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

  public documentSelectionChanged(documentChanged: IonSelect)
  {
    if (documentChanged.value === 'aadhaarCard')
    {
      this.currentDocumentSRC = this.aadhaarCardSrc;
      this.currentDocument = "Aadhaar Card";
    }
    else if (documentChanged.value === 'panCard')
    {
      this.currentDocumentSRC = this.panCardSrc;
      this.currentDocument = "Pan Card";
    }
    else if (documentChanged.value === 'skillCertificates')
    {
      this.currentDocumentSRC = this.skillCertificatesSrc;
      this.currentDocument = "Skill Certificates";
    }
    else if (documentChanged.value === 'previousEmployerDocuments')
    {
      this.currentDocumentSRC = this.previousEmployerDocumentsSrc;
      this.currentDocument = "Previous Employer Documents";
    }
  }
}