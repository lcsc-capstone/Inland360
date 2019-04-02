import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EventsDataService } from '../../events-data.service';
import { EventData } from '../../eventData';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.page.html',
  styleUrls: ['./event-info.page.scss'],
})
export class EventInfoPage implements OnInit {
  
  ID: any;
  info: EventData;

  constructor(public events: EventsDataService, private calendar: Calendar, private alert: AlertController, public route: ActivatedRoute, public navCtrl: NavController, public router: Router) 
  { 
    this.ID = this.route.snapshot.paramMap.get("id");
    this.info = events.getEvent(this.ID);
    console.log(this.info);
    console.log("Complete.");
  }

  goEventLocation(){
    let url = './event-location/' + this.ID;
    this.router.navigate([url]); 
  }

  async alert1(){
    const alert2 = await this.alert.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log(this.info.title);
          }
        }, {
          text: 'Okay',
          handler: () => {
            var date = new Date(2019, 3, 3, 15, 30, 0, 0);
            var date2 = new Date(2019, 3, 3, 16, 0, 0, 0);
            this.calendar.createEvent(this.info.title, this.info.location.name, this.info.description, date, date2);
          }
        }
      ]
    });
    alert2.present();
  }

  ngOnInit() {
  }

}
