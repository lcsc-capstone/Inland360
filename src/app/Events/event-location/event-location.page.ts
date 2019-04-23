import { Component, OnInit } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EventsDataService } from '../../events-data.service';
import { EventData } from '../../eventData';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-event-location',
  templateUrl: './event-location.page.html'
})
export class EventLocationPage implements OnInit {
  public ID;
  public info: EventData;

  constructor(public events: EventsDataService, public route: ActivatedRoute, public navCtrl: NavController, public router: Router) 
  {
    this.ID = this.route.snapshot.paramMap.get("id");
    this.info = events.getEvent(this.ID);
   }

  ngOnInit() {
  }

}
