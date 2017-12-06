import { Component, OnInit } from '@angular/core';
import { RestAPI } from '../rest-api';
import { DataService } from '../restApi';
import { Configuration } from '../apiConfiguration';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[];
  data: any;

  constructor(public api: RestAPI,
    private configuration: Configuration,
    private restApi: DataService,
    public _slimLoadingBarService: SlimLoadingBarService,
    private _toastrService: ToastrService) {

  }

  ngOnInit() {
    this._slimLoadingBarService.start();
    this.configuration._method = 'Users';

    this.restApi.getAll<any[]>()
    .subscribe((data) => this.users = data,
    error => {
      this._slimLoadingBarService.complete();
      this._toastrService.error('Meeegh', 'Error!');
    },
    () => {
      this._slimLoadingBarService.complete();
      this._toastrService.success('Hallalujahh!!', 'Success!');
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

