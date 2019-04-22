import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-categories',
  templateUrl: './event-categories.page.html'
})
export class EventCategoriesPage implements OnInit {

  private selectedItem: any;

  private data = [
    {path: "", icon: "color-palette", title: "Art and Exhibits"},
    {path: "", icon: "book", title: "Books and Authors"},
    {path: "", icon: "happy", title: "Clubs and Organization"},
    {path: "", icon: "flag", title: "Fairs and Festivals"},
    {path: "", icon: "restaurant", title: "Food and Drink"},
    {path: "", icon: "people", title: "Kids and Families"},
    {path: "", icon: "cube", title: "Misc."},
    {path: "", icon: "film", title: "Movies"},
    {path: "", icon: "musical-note", title: "Music"}
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
