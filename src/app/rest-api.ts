import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestAPI {
  data: any = {};
  private apiUrl = 'http://192.168.10.27:40200/Auth/api/Users';

  constructor(private _http: Http, private _httpClient: HttpClient) {}

  async getData(): Promise<any> {
    return await this._http
      .get(this.apiUrl)
      .map((res: Response) => res.json())
      .toPromise();
  }

  getListObservable<T>(): Observable<T> {
    const userList = this._httpClient.get<T>(this.apiUrl);
    console.log(userList);
    return userList;
  }

  async getList() {
    // this.getData().subscribe(data => {
    //   this.data = data;
    //   console.log(this.data);
    //   return this.data;
    // });
    return await this.getData();
  }

  async getById(userId: number) {
    const url = this.apiUrl + '/' + userId;
    const data = await this._http
      .get(url)
      .map((res: Response) => res.json())
      .toPromise();
    console.log(JSON.stringify(data));
    return JSON.stringify(data);
  }
}

@Injectable()
export class SetHeaders implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('content-type')) {
      request = request.clone({
        headers: request.headers.set('content-type', 'application/json')
      });
    }

    request = request.clone({
      headers: request.headers.set('accept', 'application/json')
    });

    return next.handle(request);
  }
}
