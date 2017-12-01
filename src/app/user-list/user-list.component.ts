import { Component, OnInit } from '@angular/core';
import { RestAPI } from '../rest-api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [RestAPI]
})
export class UserListComponent implements OnInit {
  users: any[];

  constructor(public api: RestAPI) {

  }

  ngOnInit() {
    this.getUserList();
    console.log('burada');
  }

  getUserList() {
    this.api.getListObservable<any[]>().subscribe((data: any[]) => {
      return this.users = data;
    },
    error => { console.log('hata: ' + error); },
    () => { console.log('başarılı'); });

    // this.users = await this.api.getList();
  }

  editClick(user) {
    console.log(user);
  }
}
