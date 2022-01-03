import { Injectable } from '@angular/core';
import {User} from './models/user';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {HTTP_OPTIONS} from "./models/constants";
import {Observable} from "rxjs";
import {ResponseData} from "./models/response-data";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase: string = '';
  constructor(private httpClient: HttpClient) {
    this.urlBase = environment.urlBack;
  }

  getUsers(): Observable<User[]> {
    let url = this.urlBase + 'method=get&detail=users';
    return this.httpClient.get<User[]>(url, HTTP_OPTIONS);
  }

  getUser(id: number): Observable<User> {
    let url = this.urlBase + 'method=get&detail=user&id='+id;
    return this.httpClient.get<User>(url, HTTP_OPTIONS);
  }

  createUser(user: User): Observable<ResponseData> {
    let url = this.urlBase + 'method=post&detail=user';
    return this.httpClient.post<ResponseData>(url, user, HTTP_OPTIONS);
  }

  deleteUser(userId: number): Observable<ResponseData> {
    let url = this.urlBase + 'method=delete&detail=user&id='+userId;
    return this.httpClient.get<ResponseData>(url, HTTP_OPTIONS);
  }
  
  updateUser(user: User): Observable<ResponseData> {
    let url = this.urlBase + 'method=put&detail=user';
    return this.httpClient.post<ResponseData>(url, user, HTTP_OPTIONS);
  }

}
