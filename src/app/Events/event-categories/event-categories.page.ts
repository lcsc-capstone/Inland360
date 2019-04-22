import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-categories',
  templateUrl: './event-categories.page.html'
})
export class EventCategoriesPage implements OnInit {

  private selectedItem: any;

  private data = [
    {path: "event-category-details", icon: "color-palette", title: "Art and Exhibits"},
    {path: "event-category-details", icon: "book", title: "Books and Authors"},
    {path: "event-category-details", icon: "happy", title: "Clubs and Organization"},
    {path: "event-category-details", icon: "flag", title: "Fairs and Festivals"},
    {path: "event-category-details", icon: "restaurant", title: "Food and Drink"},
    {path: "event-category-details", icon: "people", title: "Kids and Families"},
    {path: "event-category-details", icon: "cube", title: "Misc."},
    {path: "event-category-details", icon: "film", title: "Movies"},
    {path: "event-category-details", icon: "musical-note", title: "Music"}
  ];

  private icons = [
    'restaurant',
    'film',
    'musical-note',
    'people',
    'book',
    'color-palette',
    'cube',
    'happy',
    'flag'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 0; i < this.data.length; i++) {
      this.items.push({
        title: this.data[i][2],
        note: 'This is item #' + i,
        icon: this.data[i][1]
      });
    }
  }

  ngOnInit() {
  }


}
