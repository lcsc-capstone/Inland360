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
  public oneOut: Date;
  public twoOut: Date;
  public threeOut: Date;
  public fourOut: Date;
  public fiveOut: Date;
  public sixOut: Date;
  public sevenOut: Date;
  
  constructor(public events: EventsDataService, public navCtrl: NavController, public router: Router) { 
    this.arr = this.events.xmlItems;
    console.log("Starting arr...");
    console.log(this.arr);
    this.oneOut = new Date();
    this.twoOut = new Date();
    this.threeOut = new Date();
    this.fourOut = new Date();
    this.fiveOut = new Date();
    this.sixOut = new Date();
    this.sevenOut = new Date();
    this.oneOut.setDate(this.oneOut.getDate() + 1);
    this.twoOut.setDate(this.twoOut.getDate() + 2);
    this.threeOut.setDate(this.threeOut.getDate() + 3);
    this.fourOut.setDate(this.fourOut.getDate() + 4);
    this.fiveOut.setDate(this.fiveOut.getDate() + 5);
    this.sixOut.setDate(this.sixOut.getDate() + 6);
    this.sevenOut.setDate(this.sevenOut.getDate() + 7);
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
    this.oneOut = new Date();
    this.twoOut = new Date();
    this.threeOut = new Date();
    this.fourOut = new Date();
    this.fiveOut = new Date();
    this.sixOut = new Date();
    this.sevenOut = new Date();
    this.oneOut.setDate(this.oneOut.getDate() + 1);
    this.twoOut.setDate(this.twoOut.getDate() + 2);
    this.threeOut.setDate(this.threeOut.getDate() + 3);
    this.fourOut.setDate(this.fourOut.getDate() + 4);
    this.fiveOut.setDate(this.fiveOut.getDate() + 5);
    this.sixOut.setDate(this.sixOut.getDate() + 6);
    this.sevenOut.setDate(this.sevenOut.getDate() + 7);
  }
}
