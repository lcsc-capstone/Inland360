import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  private selectedItem: any;

  private data = [
    {path: "import-calendar", icon: "flask", title: "Import Calendar"},
    {path: "add-event", icon: "wifi", title: "Add Event"},
    {path: "event-home", icon: "paper-plane", title: "Upcoming Events"},
    {path: "event-categories", icon: "paper-plane", title: "Categories"},
    {path: "", icon: "build", title: "Full Calendar"}
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
