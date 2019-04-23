import { Component, OnInit } from '@angular/core';
import { EventData } from '../../eventData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-categories',
  templateUrl: './event-categories.page.html'
})
export class EventCategoriesPage implements OnInit {

  private selectedItem: any;

  private data = [
    {path: "event-category-details", icon: "color-palette", title: "Art and Exhibits", id: "ArtAndExhibits"},
    {path: "event-category-details", icon: "book", title: "Books and Authors", id: "BooksAndAuthors"},
    {path: "event-category-details", icon: "happy", title: "Clubs and Organizations", id: "ClubsAndOrganizations"},
    {path: "event-category-details", icon: "flag", title: "Fairs and Festivals", id: "FairsAndFestivals"},
    {path: "event-category-details", icon: "restaurant", title: "Food and Drink", id: "FoodAndDrink"},
    {path: "event-category-details", icon: "people", title: "Kids and Families", id: "KidsAndFamilies"},
    {path: "event-category-details", icon: "cube", title: "Misc.", id: "Misc"},
    {path: "event-category-details", icon: "film", title: "Movies", id: "Movies"},
    {path: "event-category-details", icon: "musical-note", title: "Music", id: "Music"}
  ];

  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public router: Router) {
    for (let i = 0; i < this.data.length; i++) {
      this.items.push({
        title: this.data[i][2],
        note: 'This is item #' + i,
        icon: this.data[i][1]
      });
    }
  }

  goCategoriesDetails(theCategory){
    let url = './event-category-details/' + theCategory.id;
    this.router.navigate([url]); 
  }

  ngOnInit() {
  }


}
