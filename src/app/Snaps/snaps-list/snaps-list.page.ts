import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snaps-list',
  templateUrl: './snaps-list.page.html',
  styleUrls: ['./snaps-list.page.scss'],
})
export class SnapsListPage implements OnInit {

  private selectedItem: any;

  private data = [
    {path: "snaps-home", icon: "flask", title: "Snaps main page"},
    {path: "snaps-upload", icon: "wifi", title: "Upload a photo"}
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
