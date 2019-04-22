import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventCategoryDetailsPage } from './event-category-details.page';

const routes: Routes = [
  {
    path: '',
    component: EventCategoryDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventCategoryDetailsPage]
})
export class EventCategoryDetailsPageModule {}
