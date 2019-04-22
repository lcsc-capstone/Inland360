import { Component, OnInit } from '@angular/core';
import { EventsDataService } from '../events-data.service';
import { EventData } from '../eventData';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  public items: Array<{ title: string; note: string; icon: string }> = [];
  public eventsxmldata: any;
  public readingIn: ["Testing...?", "I'm trying..."];
  // public todaysDate = new Date(); This is the one we want to use when actually launching the app
  // while we are testing with limited data, use the following instead
  public todaysDate: Date = new Date('April 2, 2019 03:24:00');
  public weekOut: Date;

  events: Array<EventData> = [];
  searchQuery: string = '';

  private pages = [
    'Events A',
    'Events B',
    'Events C',
    'Share Your Snaps A',
    'Weekly Publication',
    'Add Event'
  ];

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  constructor(public eventservice: EventsDataService, public navCtrl: NavController, public router: Router) {
    for (let i = 0; i < this.pages.length; i++) {
      this.items.push({
        title: this.pages[i],
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    this.eventservice.loadXML();
    console.log("Start?");
    this.eventsxmldata = this.eventservice.xmlItems;
    console.log(this.eventsxmldata);
    this.weekOut = new Date();
    this.weekOut.setDate(this.weekOut.getDate() + 3);
  }

  goEventDetails(theEventData){
    let url = './event-info/' + theEventData.id;
    this.router.navigate([url]); 
  }

  getEvents(event)
  {
    this.eventsxmldata.xmlItems.then(theResult => {
      this.events = theResult;
    })
    let queryString = event.target.value;
    if(queryString != undefined)
    {
      if(queryString.trim() == '')
      {
        return;
      }
      this.events = this.eventservice.getFilteredEventsTitle(queryString);
    }
  }

  ngOnInit() {
    this.eventservice.loadXML();
    // this.eventservice.loadXML();
    // console.log("Start?");
    // this.eventsxmldata = this.eventservice.xmlItems;
    // console.log(this.eventsxmldata);
  }

}
