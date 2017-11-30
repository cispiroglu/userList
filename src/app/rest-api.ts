import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestAPI {
  data: any = {};
  private apiUrl = 'http://192.168.10.27:40200/Auth/api/Users';

  constructor(private _http: Http) {}

  async getData(): Promise<any> {
    return await this._http.get(this.apiUrl).map((res: Response) => res.json()).toPromise();
  }

  async getList() {
    // this.getData().subscribe(data => {
    //   this.data = data;
    //   console.log(this.data);
    //   return this.data;
    // });
    return await this.getData();
  }
}

