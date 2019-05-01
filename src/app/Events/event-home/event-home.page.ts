import { Component, OnInit } from '@angular/core';
import { EventsDataService } from '../../events-data.service';
import { EventData } from '../../eventData';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.page.html'
})
export class EventHomePage implements OnInit {

  public arr: any;
  public todaysDate: Date = new Date('April 2, 2019 03:24:00');
  
  constructor(public events: EventsDataService, public navCtrl: NavController, public router: Router) { 
    this.arr = this.events.xmlItems;
    console.log("Starting arr...");
    console.log(this.arr);
  }

  goEventDetails(theEventData){
    let url = './event-info/' + theEventData.id;
    this.router.navigate([url]); 
  }

  goCategories()
  {
    let url = './event-categories/';
    this.router.navigate([url]); 
  }

  addEvent()
  {
    let url = './add-event/';
    this.router.navigate([url]); 
  }

  ngOnInit() {
    this.arr = this.events.xmlItems;
    console.log("Starting arr...");
    console.log(this.arr);
  }

  getEvents(event)
   {
    this.arr = this.events.xmlItems;
     let queryString = event.target.value;
     if(queryString != undefined)
     {
       if(queryString.trim() == '')
       {
         return;
       }
       this.arr = this.events.getFilteredEventsTitle(queryString);
     }
   }

   resetList()
   {
    this.arr = this.events.xmlItems;
   }
}
