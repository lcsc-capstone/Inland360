import { Component, OnInit } from '@angular/core';
// import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { InAppBrowser, InAppBrowserEvent, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { DomSanitizer } from '@angular/platform-browser';

import { File } from '@ionic-native/File/ngx';
// import { FilePath } from '@ionic-native/file-path/ngx';
declare var window;
@Component({
  selector: 'app-snap-upload',
  templateUrl: './snap-upload.page.html',
  styleUrls: ['./snap-upload.page.scss'],
})
export class SnapUploadPage implements OnInit {

   login_username : string = "";ç
   login_password : string = "";
   image_name : string = "";
   image_description : string = "";
   contact_email : string = "";
   contact_number : string = "";

   imagePath: string;

   constructor(private camera: Camera, private photoLibrary: PhotoLibrary,
     private sanitizer: DomSanitizer, private file: File,
     private inAppBrowser: InAppBrowser){ }
  ngOnInit() {}

  takePhoto(){
       document.querySelector('.content .value').innerHTML = 'result.substring( 7, result.length-1)';
       const options: CameraOptions = {
         quality: 100,
         destinationType: this.camera.DestinationType.FILE_URI,
         encodingType: this.camera.EncodingType.JPEG,
         mediaType: this.camera.MediaType.PICTURE,
         saveToPhotoAlbum:true
       }

       this.camera.getPicture(options).then((imageData) => {
         this.imagePath = window.Ionic.WebView.convertFileSrc(imageData);

      //document.querySelector('.photo').innerHTML = "<p align=\"center\"><ion-img src = " + this.imagePath + " alt = \"" + this.imagePath + "\"></ion-img></p>";
       }, (err) => {
        // Handle error
       });

     }

     browsePhotos(){
        document.querySelector('.content .value').innerHTML = 'browsePhotos()';
        const options: CameraOptions = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum:false,
            //encodingType: this.camera.EncodingType.JPEG,
            destinationType: this.camera.DestinationType.FILE_URI
          }

          this.camera.getPicture(options).then((imageData) => {
            this.imagePath = window.Ionic.WebView.convertFileSrc(imageData);

          //  document.querySelector('.photo').innerHTML = "<p align=\"center\"><ion-img src = " + this.imagePath + " alt = \"" + this.imagePath + "\"></ion-img></p>";
         }, (err) => {
           // Handle error
         });


      }

      uploadMyPhoto(){

          var url = 'https://inland360.com/profile/login/';

          let browser: InAppBrowserObject = this.inAppBrowser.create(url, '_blank', 'clearcache=yes,hidden=yes');
          browser.on('loadstop').subscribe(async (ev: InAppBrowserEvent) => {

          document.querySelector('.insert').innerHTML = "<p>begun</p>";
          await    browser.executeScript({ code: 'var number = document.getElementById("unique_id").value; \
          document.getElementById("username_or_email-" + number).value = "' + this.login_username + '";\
          document.getElementById("user_pass-" + number).value = "' + this.login_password + '";\
          ' });
          browser.executeScript({code: 'document.querySelector(".userpro-button").click();'});
          document.querySelector('.insert').innerHTML = "<p>submitted photo</p>";


        });

      /*
      //Submit Your Snap form on Inland360
      //Image Name:             can be anything, not validated by inland360
      //Image Description:      also can be anything
      //Contact Email Address:  needs to be in email information
      //Contact Phone Number:   NO VERIFICATION: accepts letters and numbers, can be any length

      */
      }

}
