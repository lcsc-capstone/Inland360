import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'event-list', loadChildren: './Events/event-list/event-list.module#EventListPageModule' },
  { path: 'event-home', loadChildren: './Events/event-home/event-home.module#EventHomePageModule' },
  { path: 'event-info/:id', loadChildren: './Events/event-info/event-info.module#EventInfoPageModule' },
  { path: 'event-location/:id', loadChildren: './Events/event-location/event-location.module#EventLocationPageModule' },
  { path: 'event-categories', loadChildren: './Events/event-categories/event-categories.module#EventCategoriesPageModule' },
  { path: 'import-calendar', loadChildren: './import-calendar/import-calendar.module#ImportCalendarPageModule' },
  { path: 'snaps-upload', loadChildren: './Snaps/snaps-upload/snaps-upload.module#SnapsUploadPageModule' },
  { path: 'snaps-list', loadChildren: './Snaps/snaps-list/snaps-list.module#SnapsListPageModule' },
  { path: 'snaps-home', loadChildren: './Snaps/snaps-home/snaps-home.module#SnapsHomePageModule' },
  { path: 'add-event', loadChildren: './Events/add-event/add-event.module#AddEventPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
