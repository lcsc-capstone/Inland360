import { Component } from '@angular/core';
import { EventsDataService} from './app/events-data.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OnInit } from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Events',
      url: '/event-list',
      icon: 'list'
    },
    {
      title: 'Share Your Snaps',
      url: '/snaps-list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public eventservice: EventsDataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit()
  {
    //this.eventservice.ngOnInit
    this.eventservice.loadXML();
    if ((this.eventservice.getXmlItems).length == 0)
    {
      delay(3000);
      console.log("Alert!");
    }
    this.eventservice.loadXML();
  }
}
