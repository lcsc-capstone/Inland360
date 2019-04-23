import { Component, OnInit } from '@angular/core';
import { EventData } from '../../eventData';
import { EventsDataService } from '../../events-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-category-details',
  templateUrl: './event-category-details.page.html',
  styleUrls: ['./event-category-details.page.scss'],
})
export class EventCategoryDetailsPage implements OnInit {

  ID: any;
  info: any;
  public category: string;

  constructor(public route: ActivatedRoute, public events: EventsDataService) { 
    this.ID = this.route.snapshot.paramMap.get("id");
    this.getCategoryEvents();
  }

  ngOnInit() {
  }

  private getCategoryEvents()
  {
    this.info = this.events.getXmlItems;
    if(this.ID == "ArtAndExhibits")
    {
      this.category = "Art and Exhibits";
    }
    else if (this.ID == "BooksAndAuthors")
    {
      this.category = "Books and Authors";
    }
    else if (this.ID == "ClubsAndOrganizations")
    {
      this.category = "Clubs and Organizations";
    }
    else if (this.ID == "FairsAndFestivals")
    {
      this.category = "Fairs and Festivals";
    }
    else if (this.ID == "FoodAndDrink")
    {
      this.category = "Food and Drink";
    }
    else if (this.ID == "KidsAndFamilies")
    {
      this.category = "Kids and Families";
    }
    else if (this.ID == "Misc")
    {
      this.category = "Misc.";
    }
    else if (this.ID == "Movies")
    {
      this.category = "Movies";
    }
    else if (this.ID == "Music")
    {
      this.category = "Music";
    }

    if(this.category != undefined)
    {
      if(this.category.trim() == '')
      {
        return;
      }
       this.info = this.events.getFilteredEventsCategory(this.category);
       console.log(this.category);
       console.log(this.info);
    }
   }

}
