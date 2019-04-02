import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
  { path: 'snaps-home', loadChildren: './Snaps/snaps-home/snaps-home.module#SnapsHomePageModule' },
  { path: 'snaps-upload', loadChildren: './Snaps/snaps-upload/snaps-upload.module#SnapsUploadPageModule' },
  { path: 'snaps-list', loadChildren: './Snaps/snaps-list/snaps-list.module#SnapsListPageModule' },
  { path: 'snaps-new-account', loadChildren: './Login/snaps-new-account/snaps-new-account.module#SnapsNewAccountPageModule' },
  { path: 'login-forgot-password', loadChildren: './Login/login-forgot-password/login-forgot-password.module#LoginForgotPasswordPageModule' },
  { path: 'login-new-password', loadChildren: './Login/login-new-password/login-new-password.module#LoginNewPasswordPageModule' },
  { path: 'add-event', loadChildren: './Events/add-event/add-event.module#AddEventPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
