import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { RestAPI } from './rest-api';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RestAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
