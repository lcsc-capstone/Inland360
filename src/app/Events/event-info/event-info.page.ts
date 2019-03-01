import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.page.html',
  styleUrls: ['./event-info.page.scss'],
})
export class EventInfoPage implements OnInit {

  constructor(private calendar: Calendar, private alert: AlertController) { }

  async alert1(){
    const alert2 = await this.alert.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("thing");
          }
        }, {
          text: 'Okay',
          handler: () => {
            var date = new Date(2019, 3, 3, 15, 30, 0, 0);
            var date2 = new Date(2019, 3, 3, 16, 0, 0, 0);
            this.calendar.createEvent("thing", "lewiston", "something", date, date2);
          }
        }
      ]
    });
    alert2.present();
  }

  ngOnInit() {
  }

}
