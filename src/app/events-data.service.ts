import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as xml2js from "xml2js";

@Injectable({
  providedIn: 'root'

})

export class EventsDataService {
  public xmlItems: any;

  public getEvent(id: string)
  {
    for(var i = 0; i < this.xmlItems.length; i++)
    {
        if(this.xmlItems[i].id == id)
        {
            return this.xmlItems[i];
        }
    }
    return "Not found!";
    
  }

  getFilteredEventsTitle(queryString)
  {
    var filteredXmlEvents = [];
    var count = 0;
    for (let theEvent of this.xmlItems)
    {
        if(theEvent.title.toLowerCase().indexOf(queryString.toLowerCase())> -1)
        {
          filteredXmlEvents[count] = theEvent;
          count ++;
        }
    }
    return filteredXmlEvents;
  }

  getFilteredEventsCategory(queryString)
  {
    var filteredXmlEvents = [];
    var count = 0;
    for (let theEvent of this.xmlItems)
    {
        if(theEvent.category.toLowerCase().indexOf(queryString.toLowerCase())> -1)
        {
          filteredXmlEvents[count] = theEvent;
          count ++;
        }
    }
    return filteredXmlEvents;
  }

  public getXmlItems()
  {
    console.log(this.xmlItems);
    return this.xmlItems;
  }

  public loadXML()
  {
    this.http.get('../assets/data/PopulatedEvents.xml',
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
            sortTime: item.fnsort_time[0],
            date: getDate(item.fndisplay_time[0], item.fnsort_time[0]),
            category: item.fnevent_category[0].fncategory_name[0],
            //image: item.fnimage[0].fnurl[0]
          });
        }
        resolve(arr2); 
      });
    });
  }
  constructor(public http: HttpClient) { }
}

function getDate(displayTime: string, sortTime: string)
{
    var sort = sortTime;
    var display = displayTime;
    var displaySplit = display.split(',');
    var displaySplitSplit = displaySplit[1].split(" ");
    var Month = displaySplitSplit[3].trim();
    var numericalDay = displaySplitSplit[4].trim();
    var year = displaySplit[2].trim();
    var sortSplit = sort.split(":");
    var sortSplitSplit = sortSplit[2].split(" ");
    var Hour = sortSplit[0].trim();
    var Minutes = sortSplit[1].trim();
    var Seconds = sortSplitSplit[0].trim();
    var newFormat = Month + " " + numericalDay + ", " + year + " " + Hour + ":" + Minutes + ":" + Seconds;
    return new Date(newFormat);
}