import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html'
})
export class EventListPage implements OnInit {
  private selectedItem: any;

  private data = [
    {path: "event-home", icon: "paper", title: "Upcoming Events"},
    {path: "event-categories", icon: "apps", title: "Categories"}
    //{path: "", icon: "build", title: "Full Calendar"}
  ];

  private icons = [
    'apps',
    'paper',
    'add',
    'calendar',
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
