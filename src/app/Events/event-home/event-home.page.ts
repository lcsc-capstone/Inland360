import { Component, OnInit } from '@angular/core';
import { EventsDataService } from '../../events-data.service';
import { EventData } from '../../eventData';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.page.html',
  styleUrls: ['./event-home.page.scss'],
})
export class EventHomePage implements OnInit {

  public arr: any;
  
  constructor(public events: EventsDataService) { 
    this.arr = this.events.xmlItems;
    console.log("Arr is working.");
    console.log(this.arr);
  }

  ngOnInit() {
  }
}
