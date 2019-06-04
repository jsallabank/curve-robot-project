import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationProvider } from '../authentication/authentication';

@Injectable()
export class ConnectProvider {

  public apiRoot = 'https://www.curvetomorrow.com.au/api/';
  public headers = new HttpHeaders();
  public token: string = null;

  constructor(public http: HttpClient, public auth: AuthenticationProvider) {
    console.log('Hello ConnectProvider');
  }

  public getToken(email: string, password: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`${this.apiRoot}login`, `email=${email}password=${password}`, {
      headers
    });
  }

  public setAuthenticatedHeader() {
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
    this.headers = this.headers.set('Authorization', `Bearer ${this.auth.token}`);
  }

  public list(object: string) {
    this.setAuthenticatedHeader();
    return this.http.get(this.apiRoot + object, { headers: this.headers });
  }

  public get(object: string, id: any) {
    this.setAuthenticatedHeader();
    return this.http.get(`${this.apiRoot}${object}/${id}`, { headers: this.headers });
  }

  public getCustom(object: string) {
    this.setAuthenticatedHeader();
    return this.http.get(this.apiRoot + object, {
      headers: this.headers
    });
  }

  public create(object: string, parameters: any) {
    this.setAuthenticatedHeader();
    const data: string = JSON.stringify(parameters);
    return this.http.post(this.apiRoot + object, data, { headers: this.headers });
  }

  public update(object: string, id: any, parameters: any) {
    this.setAuthenticatedHeader();
    const data: string = JSON.stringify(parameters);
    return this.http.put(`${this.apiRoot}${object}/${id}`, data, { headers: this.headers });
  }

  public delete(object: string, id: any) {
    this.setAuthenticatedHeader();
    return this.http.delete(`${this.apiRoot}${object}/${id}`, { headers: this.headers });
  }
}

