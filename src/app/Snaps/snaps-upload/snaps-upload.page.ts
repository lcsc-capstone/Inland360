import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { InAppBrowser, InAppBrowserEvent, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { DomSanitizer } from '@angular/platform-browser';

import { File } from '@ionic-native/File/ngx';
//import { FilePath } from '@ionic-native/file-path/ngx';
declare var window;
@Component({
  selector: 'app-snaps-upload',
  templateUrl: './snaps-upload.page.html',
  styleUrls: ['./snaps-upload.page.scss'],
})
export class SnapsUploadPage implements OnInit {

   login_username : string = "";
   login_password : string = "";
   image_name : string = "";
   image_description : string = "";
   contact_email : string = "";
   contact_number : string = "";

   imagePath: string;

   constructor(private camera: Camera, private photoLibrary: PhotoLibrary,
     private sanitizer: DomSanitizer,private file: File,
     private inAppBrowser: InAppBrowser){ }

  ngOnInit() {}


  takePhoto(){
       //document.querySelector('.content .value').innerHTML = 'result.substring( 7, result.length-1)';
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
       this.uploadMyPhoto();
     }

     browsePhotos(){
        //document.querySelector('.content .value').innerHTML = 'browsePhotos()';
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

         this.uploadMyPhoto();

      }

      uploadMyPhoto(){

          var url = 'https://inland360.com/profile/login/';

          let browser: InAppBrowserObject = this.inAppBrowser.create(url, '_blank', 'clearcache=yes,hidden=no');

        //login to inland360
        browser.on('loadstop').subscribe(async (ev: InAppBrowserEvent) => {

            await browser.executeScript({ code: 'var number = document.getElementById("unique_id").value; \
            document.getElementById("username_or_email-" + number).value = "' + this.login_username + '";\
            document.getElementById("user_pass-" + number).value = "' + this.login_password + '";\
            ' });

            await browser.executeScript({code: 'document.querySelector(".userpro-button").click();'});

            document.querySelector('.insert').innerHTML = "<p>logged in successfully</p>";

            //navigate to snap form: url = 'https://inland360.com/share-your-snaps/submit/'
            //class="the_menu_holder_area"
            //class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-47121 current_page_item mom_default_menu_item menu-item-depth-0"



        });

        //cordova.InAppBrowser.open(url, '_blank', 'hidden=no')



      /*
      //Submit Your Snap form on Inland360
      //Image Name:             can be anything, not validated by inland360
      //Image Description:      also can be anything
      //Contact Email Address:  needs to be in email information
      //Contact Phone Number:   NO VERIFICATION: accepts letters and numbers, can be any length

      */
      }

}
