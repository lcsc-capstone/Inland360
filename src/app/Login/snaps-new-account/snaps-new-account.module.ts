import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SnapsNewAccountPage } from './snaps-new-account.page';

const routes: Routes = [
  {
    path: '',
    component: SnapsNewAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SnapsNewAccountPage]
})
export class SnapsNewAccountPageModule {}
