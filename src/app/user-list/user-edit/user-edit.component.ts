import { Component, OnInit } from '@angular/core';
import { RestAPI } from '../../rest-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: any;

  constructor(private api: RestAPI, private router: ActivatedRoute) {
    const userId: number = Number(this.router.snapshot.params['id']);
    this.user = this.callUser(userId);
    console.log(this.user);
  }

  ngOnInit() {

  }

  async callUser(userId: number) {
    return await this.getUserById(userId);
  }

  async getUserById(userId: number) {
    return await this.api.getById(userId);
    // console.log(this.user);
  }
}
