import { Component, OnInit } from '@angular/core';
import { RestAPI } from '../../rest-api';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../restApi';
import { Configuration } from '../../apiConfiguration';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: any;

  constructor(private api: RestAPI,
    public restApi: DataService,
    private router: ActivatedRoute,
    public _slimLoadingBarService: SlimLoadingBarService,
    private _toastrService: ToastrService,
    public configuration: Configuration) {

    const userId: number = Number(this.router.snapshot.params['id']);
    this.getUserById(userId);
    // this.user = this.getUserById(userId);
    // console.log(this.user);
  }

  ngOnInit() {

  }

  // async callUser(userId: number) {
  //   return await this.getUserById(userId);
  // }

  getUserById(userId: number) {
    this.configuration._method = 'Users';

    this.restApi.getSingle<any>(userId)
    .subscribe((data) => this.user = data,
    error => {
      this._slimLoadingBarService.complete();
      this._toastrService.error('Meeegh', 'Error!');
    },
    () => {
      this._slimLoadingBarService.complete();
      this._toastrService.success('Hallalujahh!!', 'Success!');
    });
    // return await this.api.getById(userId);
    // console.log(this.user);
  }
}
