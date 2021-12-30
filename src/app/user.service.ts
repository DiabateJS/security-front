import { Injectable } from '@angular/core';
import {User} from './models/user';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {HTTP_OPTIONS} from "./models/constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    const urlBase = environment.urlBack;
    let url = urlBase + 'method=get&detail=users';
    return this.httpClient.get<User[]>(url, HTTP_OPTIONS);
  }

}
