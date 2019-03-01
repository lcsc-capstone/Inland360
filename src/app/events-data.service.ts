import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import { HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
//import xml2js from 'xml2js';
import * as xml2js from "xml2js";

@Injectable({
  providedIn: 'root'

})
export class EventsDataService {
  public xmlItems : any;

  ionViewWillEnter()
  {
      this.loadXML();
  }

  public loadXML()
    {
      this.http.get('/assets/data/Events copy.xml',
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
          this.parseXML(data)
          .then((data)=>
          {
             this.xmlItems = data;
          });
        console.log(data);
      }, (err) =>
      {
        console.log(err);
      });
    }
    parseXML(data)
   {
      return new Promise(resolve =>
      {
         var e,
         
         

             arr    = [],
             parser = new xml2js.Parser(
             {
                trim: true,
                explicitArray: true
             });
          var c;   
         parser.parseString(data, function (err, result)
         {
            var obj = result.EventsDataService;
            for(e in obj.event)
            {
               var item = obj.event[e];
               arr.push({
                  starttime           : item.starttime[0],
                  endtime       : item.endtime[0],
                  title : item.title[0],
                  description       : item.description[0],
                  featured : item.featured[0],
                  premier : item.premier[0],
                  id : item.id[0],
                  image : item.image[0],  
               });
              {

              }
            }

            resolve(arr);
         });
      });
   }

  constructor(public navCtrl: NavController,public http: HttpClient) { }
}
