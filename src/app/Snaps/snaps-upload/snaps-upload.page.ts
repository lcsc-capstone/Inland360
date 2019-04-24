import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';

import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

declare var window;
@Component({
  selector: 'app-snaps-upload',
  templateUrl: './snaps-upload.page.html',
  styleUrls: ['./snaps-upload.page.scss'],
})
export class SnapsUploadPage implements OnInit {

   login_username : string;
   login_password : string;
   // image_name : string ;
   // image_description : string;
   // contact_email : string ;
   // contact_number : string ;

   imagePath: string;

   constructor(
     private sanitizer: DomSanitizer,
     private inAppBrowser: InAppBrowser,
     public spinnerDialog: SpinnerDialog
   ){
    // this.login_username = "";
     //this.login_password = "";
     // this.image_name  = "";
     // this.image_description  = "";
     // this.contact_email  = "";
     // this.contact_number  = "";
   }

  ngOnInit() {}

      createAccount(){
          var url = 'https://inland360.com/profile/login/';

          let browser: InAppBrowserObject = this.inAppBrowser.create(url, '_blank', 'clearcache=yes,hidden=yes,hidenavigationbuttons=yes,hideurlbar=yes');

          browser.on('loadstop').subscribe( (ev: InAppBrowserEvent) => {
            browser.executeScript({code: 'document.querySelector("input.userpro-button.secondary.fullwidth-block").click();'}).then( function(){
              setTimeout(function(){
                browser.show();
              ;}, 1500);

            });
          });



      }

      uploadMyPhoto(){

          var url = 'https://inland360.com/profile/login/';

          let browser: InAppBrowserObject = this.inAppBrowser.create(url, '_blank', 'clearcache=yes,hidden=yes,hidenavigationbuttons=no,hideurlbar=no');

        this.spinnerDialog.show("","If you're not redirected soon, please try again.", false);

//         var image = (<HTMLInputElement>document.getElementById("image_name")).value;
//         var description = (<HTMLInputElement>document.getElementById("image_description")).value;
//         var email = (<HTMLInputElement>document.getElementById("contact_email")).value;
//         var number = (<HTMLInputElement>document.getElementById("contact_number")).value;

        browser.on('loadstop').subscribe( (ev: InAppBrowserEvent) => {
                    browser.executeScript({ code: 'var number = document.getElementById("unique_id").value;\
                     document.getElementById("username_or_email-" + number).value = "' + this.login_username + '"; \
                    document.getElementById("user_pass-" + number).value = "' + this.login_password + '"; \
                    document.querySelector(".userpro-button").click();'}).then( function(){
                       setTimeout(function(){
                          document.querySelector('.insert').innerHTML = "<p>logged in successfully</p>";
                          browser.executeScript({code: 'document.querySelector(".the_menu_holder_area").click();'}).then( function(){

                             browser.executeScript({code: 'document.querySelector("nav > div > div > div > ul > li#menu-item-1047364 > a ").click();'}).then( function(){
                                 setTimeout(function(){

                                     browser.executeScript({code: 'document.querySelector("img.vc_single_image-img.attachment-full").click();'}).then( function(){
                                       setTimeout(function(){

                                        // this.spinnerDialog.hide();
                                         //fill out snaps form
                                        // browser.executeScript({ code: ' document.getElementById("uig_image_name").value = \"' + this.login_username + '\";  document.getElementById("uig_image_desc").value = "' + this.image_description + '"; document.getElementById("uig_contact_email").value = "' + this.contact_email + '";  document.getElementById("uig_contact_phone").value = "' + this.contact_number + '"; ' });


//                                          browser.executeScript({ code: ' document.getElementById("uig_image_name").value = "' + image + '"; ' });
//                                          browser.executeScript({ code: ' document.getElementById("uig_image_desc").value = "' + description + '"; ' });
//                                          browser.executeScript({ code: ' document.getElementById("uig_contact_email").value = "' + email + '"; ' });
//                                          browser.executeScript({ code: ' document.getElementById("uig_contact_phone").value = "' + number + '"; ' }).then( function(){

                                            browser.show();
                                              //browser.executeScript({code: 'document.querySelector("input#uig_submit").click();'});

                                              document.querySelector('.insert').innerHTML = "<p>submitted photo successfully</p>";
                                         });

                                       ;}, 2000);
                                    });
                                ;}, 2000);

                          });

                        });
                      ;}, 6000);

                   });


                });

      }

}
