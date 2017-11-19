import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {RouterModule} from "@angular/router";

const BASE_URL = 'http://localhost:3000/Users';
const header = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  authenticateUser(user) {
    return this.http.get(BASE_URL + '?username=' + user.username + '&password=' + user.password)
      .map(res => res.json());
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
  getAllUsers() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }
  getUserById(id) {
    return this.http.get(BASE_URL + '?id=' + id)
      .map(res => res.json());
  }
  updateUserData(data) {
    return this.http.put(BASE_URL + '/' + (data.id), data, header)
      .map(res => res.json());
  }
}
