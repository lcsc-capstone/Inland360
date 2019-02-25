import { Component, OnInit } from '@angular/core';
import { EventsDataService } from '../../events-data.service';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.page.html',
  styleUrls: ['./event-home.page.scss'],
})
export class EventHomePage implements OnInit {

  constructor(public events: EventsDataService) { 
    this.events.loadXML();
  }

  ngOnInit() {
  }

}
