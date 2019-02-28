import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import * as xml2js from "xml2js";

@Injectable({
  providedIn: 'root'

})
export class EventsDataService {
  
  public loadXML()
    {
      this.http.get('/assets/data/events.xml',
      {
        //headers: new HttpHeaders()
        // .set('Content-Type', 'text/xml')
        // .append('Access-Control-Allow-Methods', 'GET')
        // .append('Access-Control-Allow-Origin', '*')
        // .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        // responseType:'text'
      })
      .subscribe((data)=>
      {
        //  this.parseXML(data)
        //  .then((data)=>
        //  {
        //     this.xmlItems = data;
        //  });
        console.log(data);
      }, (err) =>
      {
        console.log(err);
      });
    }

  constructor(public http: Http) { }
}
