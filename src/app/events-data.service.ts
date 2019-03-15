import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as xml2js from "xml2js";
import { isBoolean, isString, isArray } from 'util';
import { XSRF_HEADER_NAME } from '@angular/common/http/src/xsrf';

import { EventData } from './eventData';

@Injectable({
  providedIn: 'root'

})

export class EventsDataService {
  public xmlItems: any;
  
  public arr: Array<EventData> = [];

  public loadXML()
  {
    console.log("Starting loadXML()...");
    this.http.get('/assets/data/outputInland (1).xml',
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
      this.arr = [];
      console.log(this.arr);
      this.parseXML(data)
      .then((data)=>
      {
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
      var parser = new xml2js.Parser(
      {
        trim: true,
        explicitArray: true,
      });   
      parser.parseString(data, function (err, result)
      { 
        var arr2 = [];
        var events = result.rss.channel[0].item;
        for(var event in events)
        {
          var item = events[event];
          arr2.push(
          {
            id: item.fnoid[0],
            title: item.title[0],
            description: item.description[0],
            price: item.fnprice[0],
            phone:  item.fnphone[0],
            url:  item.fnurl[0],
            location: 
            {
              name: item.fnlocation[0].fnname[0],
              address: item.fnlocation[0].fnaddress[0],
              addressSupplement: item.fnlocation[0].fnaddress_supplement[0],
              city: item.fnlocation[0].fncity[0],
              state: item.fnlocation[0].fnstate[0],
              zip: item.fnlocation[0].fnpostal_code[0],
              phone: item.fnlocation[0].fnphone[0],
              latitude: item.fnlocation[0].fnlatitude[0],
              longitude: item.fnlocation[0].fnlongitude[0],
              description: item.fnlocation[0].fndescription[0],
            },
            displayTime: item.fndisplay_time[0],
            sortTime: item.fnsort_time[0]
          });
          console.log(arr2);
        }
        console.log("arr2: " + arr2);
        resolve(arr2); 
      });
    });
  }
  constructor(public http: HttpClient) { }
}
