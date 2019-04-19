import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-categories',
  templateUrl: './event-categories.page.html'
})
export class EventCategoriesPage implements OnInit {

  private selectedItem: any;

  private data = [
    {path: "", icon: "flask", title: "Art and Exhibits"},
    {path: "", icon: "wifi", title: "Books and Authors"},
    {path: "", icon: "paper-plane", title: "Clubs and Organization"},
    {path: "", icon: "paper-plane", title: "Fairs and Festivals"},
    {path: "", icon: "build", title: "Food and Drink"},
    {path: "", icon: "build", title: "Kids and Families"},
    {path: "", icon: "build", title: "Misc."},
    {path: "", icon: "build", title: "Movies"},
    {path: "", icon: "build", title: "Music"}
  ];

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
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
