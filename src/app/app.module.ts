import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserAddComponent } from './user-add';
import { BeaconListComponent, DeleteBeaconDialogComponent,
  BeaconLocationComponent, BeaconLocationAddComponent } from './beacon-list';
import { BeaconAddComponent } from './beacon-add';
import { LocationListComponent, DeleteLocationDialogComponent,
  LocationBeaconComponent, LocationBeaconAddComponent,
  LocationUsersAddComponent, LocationUsersComponent } from './location-list';
import { LocationAddComponent } from './location-add';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AlertService, AuthenticationService, IbeaconService, LocationService,
  UserService, UserLocationService, PagerService} from './_services';
import {UsersLocationComponent, DeleteUserDialogComponent,
  UserListComponent, UsersLocationAddComponent} from './user-list';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatRippleModule,
  MatTableModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { EntryLogListComponent } from './entry-log-list/entry-log-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatTableModule
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CdkTableModule,
    CdkTreeModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    routing
  ],
  entryComponents: [UsersLocationAddComponent, DeleteUserDialogComponent, UsersLocationComponent,
    DeleteBeaconDialogComponent, BeaconLocationComponent, BeaconLocationAddComponent,
    DeleteLocationDialogComponent, LocationBeaconComponent, LocationBeaconAddComponent,
    LocationUsersAddComponent, LocationUsersComponent],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent ,
    UserListComponent ,
    UserAddComponent ,
    BeaconListComponent,
    BeaconAddComponent,
    LocationListComponent,
    LocationAddComponent,
    DeleteUserDialogComponent,
    UsersLocationComponent,
    UsersLocationAddComponent,
    DeleteBeaconDialogComponent,
    BeaconLocationComponent,
    BeaconLocationAddComponent,
    DeleteLocationDialogComponent,
    LocationBeaconComponent,
    LocationBeaconAddComponent,
    LocationUsersAddComponent,
    LocationUsersComponent,
    EntryLogListComponent,
  ],
  providers: [
    PagerService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    IbeaconService,
    LocationService,
    UserLocationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
