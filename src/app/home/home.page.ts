import { Component, OnInit } from '@angular/core';
import { EventsDataService } from '../events-data.service';
import { getLocaleDateFormat } from '@angular/common';
import { EventData } from '../eventData';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  private selectedItem: any;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  public eventsxmldata: Array<EventData>;
  public readingIn: ["Testing...?", "I'm trying..."]

  private pages = [
    'Events A',
    'Events B',
    'Events C',
    'Share Your Snaps A',
    'Weekly Publication',
    'Add Event'
  ];

  private data = [
    {path: "event-list", icon: "flask", title: "Events"},
    {path: "snaps-a", icon: "wifi", title: "Share Your Snaps"},
    {path: "event-a", icon: "paper-plane", title: "Testing Drop"}
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

  constructor(public eventservice: EventsDataService) {
    for (let i = 0; i < this.pages.length; i++) {
      this.items.push({
        title: this.pages[i],
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    this.eventservice.loadXML();
    this.eventsxmldata = this.eventservice.xmlItems;
  }

  ngOnInit() {
  }

}
