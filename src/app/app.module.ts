import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { RestAPI } from './rest-api';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AppRoutingModule, RoutesComponents } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './restApi';
import { Configuration } from './apiConfiguration';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    UserEditComponent,
    NotFoundComponent,
    RoutesComponents,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestAPI, DataService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
