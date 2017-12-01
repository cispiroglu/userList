import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate } from '@angular/router';
import { Configuration } from './apiConfiguration';

@Injectable()
export class DataService {

    private actionUrl: string;
    public token: string;

    constructor(private http: HttpClient, private _api: Configuration, private router: Router) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        // this.actionUrl = _api.ServerWithApiUrl;
    }

    public login(username: string, password: string): Observable<boolean> {
        this._api._method = 'User_Login';
        return this.http.post(this.actionUrl, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // response içerisinde token varsa login başarılı
                const responseJson: any = response.json();
                // let token = response.json() && response.json().token;
                const token = responseJson && responseJson.token;
                if (token) {
                    // token değerini setle
                    this.token = token;

                    // routing yaparken token kontrolü için response token localStorage ile sakla
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // login başarılı
                    return true;
                } else {
                    // login başarısız
                    return false;
                }
            });
    }

    public logout(): void {
        // token bilgilerini sil. (session temizle)
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    public getAll<T>(): Observable<T> {
        this.actionUrl = this._api._apiUrl + this._api._method;
        return this.http.get<T>(this.actionUrl);
    }

    public getSingle<T>(id: number): Observable<T> {
        this.actionUrl = this._api._apiUrl + this._api._method + '/' + id;
        return this.http.get<T>(this.actionUrl);
    }

    public add<T>(itemName: string): Observable<T> {
        const toAdd = JSON.stringify({ ItemName: itemName });

        return this.http.post<T>(this.actionUrl, toAdd);
    }

    public update<T>(id: number, itemToUpdate: any): Observable<T> {
        return this.http
            .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    }

    public delete<T>(id: number): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}
