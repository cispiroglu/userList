import { Component, OnInit } from '@angular/core';
import { RestAPI } from '../rest-api';
import { DataService } from '../restApi';
import { Configuration } from '../apiConfiguration';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [RestAPI, DataService, Configuration]
})
export class UserListComponent implements OnInit {
  users: any[];
  data: any;

  constructor(public api: RestAPI, public configuration: Configuration, public restApi: DataService) {

  }

  ngOnInit() {
    this.configuration._method = 'Users';
    this.restApi.getAll<any[]>()
    .subscribe((data) => this.data = data,
    error => {
        console.log('error');
      },
    () => {
      this.users = this.data;
      console.log('success');
    });
    // this.getUserList();
    // console.log('burada');
  }

  getUserList() {
    // this.api.getListObservable<any[]>().subscribe((data: any[]) => {
    //   return this.users = data;
    // },
    // error => { console.log('hata: ' + error); },
    // () => { console.log('başarılı'); });

    this.restApi.getAll();

    // this.users = await this.api.getList();
  }

  editClick(user) {
    console.log(user);
  }
}
