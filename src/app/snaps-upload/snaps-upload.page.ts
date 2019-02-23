import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-snaps-upload',
  templateUrl: './snaps-upload.page.html',
  styleUrls: ['./snaps-upload.page.scss'],
  template:    '<form></form>'   /*<form [formGroup]="upload" (ngSubmit)="logForm()" form_id="Upload">
                  <ion-item>
                    <label>Email: </label>
                    <input type="email" required placeholder="Email">
                  </ion-item>
                  <br>
                  <ion-item>
                    <label> Password: </label>
                    <input type="text" required placeholder="Passowrd" ng-minlength="8" ng-pattern="/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/" required>
                  </ion-item>
                  <br>
                  <ion-item>
                    <label> Photo Name: </label>
                    <input type="text" required placeholder="Photo Name" required>
                  </ion-item>
                  <br>
                  <ion-item>
                    <label>Photo Description: </label>
                    <input type="textarea" placeholder="Photo Description">
                  </ion-item>
                  <br>
                  <ion-item>
                    <label>Phone Number: </label>
                    <input type="number" placeholder="phone number" ng-minlength="10" ng-maxlength="11" required>
                  </ion-item>
                  <br>
                  <ion-item>
                    <label>Select the Photo: </label>
                    <input type="image" placeholder="Photo Path" required>
                    <button>Upload from photo library</button>
                    <button>Take a picture</button>
                  </ion-item>
                    <button>Submit</button>
                  <ion-item>
                    <button>Don't have an account? Create an account here</button>
                    <button>Forgot your password? Click here</button>
                  </ion-item>
                </form>
                */
})
export class SnapsUploadPage implements OnInit {
  private upload : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.upload = this.formBuilder.group({
      title: ["", Validators.required],
      description: [""],
    })
   }

  ngOnInit() {
  }

}