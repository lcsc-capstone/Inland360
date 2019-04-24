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
  templateUrl: './event-info.page.html'
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
      header: '',
      message: 'Are you sure you want to add this event to your calendar?',
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
            var twoHour = new Date(this.info.date.getTime());
            twoHour.setTime(twoHour.getTime()+2*60*60*1000)
          // twoHour.setDate(this.info.date.getDate() + 2);
            var date = new Date(this.info.date.getTime());
           // date.setDate(this.info.date.getDate());
            
            this.calendar.createEvent(this.info.title, this.info.location.name, this.info.description, date, twoHour);
          }
        }
      ]
    });
    alert2.present();
  }

  ngOnInit() {
  }

}
