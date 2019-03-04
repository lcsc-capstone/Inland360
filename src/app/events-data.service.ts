import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import { map } from 'rxjs/operators';
//import { setTimeout } from 'timers';
//import xml2js from 'xml2js';
import * as xml2js from "xml2js";
import { isBoolean, isString, isArray } from 'util';
import { XSRF_HEADER_NAME } from '@angular/common/http/src/xsrf';

@Injectable({
  providedIn: 'root'

})


export class EventsDataService {
  public xmlItems : any;

  public loadXML()
    {
      console.log("Starting loadXML()...");
      this.http.get('/assets/data/Event.xml',
      {
        headers: new HttpHeaders()
         .set('Content-Type', 'text/xml')
         .append('Access-Control-Allow-Methods', 'GET')
         .append('Access-Control-Allow-Origin', '*')
         .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
         responseType:'text'
      })
      .subscribe((data)=>
      {
        console.log("Subscribing data...");
        this.parseXML(data)
        .then((data)=>
        {
            console.log("Adding parsed data to xmlItems");
            console.log(data);
            this.xmlItems = data;
            console.log(this.xmlItems);
        });
      }, (err) =>
      {
        console.log("Logging error...");
        console.log(err);
      });

    }
    parseXML(data)
   {
     return new Promise((resolve, reject) =>
     {
          var arr: Array<any> = [];
          var e,
          parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
          var c;   
          parser.parseString(data, function (err, result)
          {
            /*var obj = result.root.events[0];
            for(e in obj.event)
            {
              var item = obj.event[e];
              arr[e] = [];
              arr[e][0]=item.starttime[0];
              arr[e][1]=item.endtime[0];
              arr[e][2]=item.title[0];
              arr[e][3]=item.description[0];
              arr[e][4]=item.featured[0];
              arr[e][5]=item.premier[0];
              arr[e][6]=item.id[0];
              arr[e][7]=item.image[0];
              console.log("this.arr");
              console.log(arr);
            }
            */
              console.log("starting?");
              var event = result.rss.channel[0].item;
              var count = 1;
              for(var n in event)
              {
                arr[count] = [];
                arr[count][0] = event[n].title[0];
                arr[count][1] = event[n].description[0];
                //arr[n][0] = event[n]."fn:artist"[0];
                //arr[n][0][0] = event[n][3][0];
                //for(var i in event.n)
                // {
                //   //arr[n][0]=event[n][i][0];
                // }
                count++;
              }
              console.log(arr);
              /*
              var item = obj.item;
              arr[e] = [];
              arr[e][0] = item.title[0];
              arr[e][1] = item.description[0];
              */
          }); 
          resolve();
      });
      return new Promise(resolve =>
      {
         var e,
             //arr    = [],
             parser = new xml2js.Parser(
             {
                trim: true,
                explicitArray: true
             });
          var c;   
         parser.parseString(data, function (err, result)
         {
            //var obj = result.EventsDataService;
            var obj = result.root.events;
            //console.log("result.root.events[0].event[0]");
            //console.log("result.root.events[0].event[0].starttime");
            for(e in obj.event)
            {
              var item = obj.event[e];
               this.arr.push({
                  starttime           : item.starttime[0],
                  endtime       : item.endtime[0],
                  title : item.title[0],
                  description       : item.description[0],
                  featured : item.featured[0],
                  premier : item.premier[0],
                  id : item.id[0],
                  image : item.image[0],  
               }); 
            }
         }); 
      });
   }

  constructor(public navCtrl: NavController,public http: HttpClient) { }
}
