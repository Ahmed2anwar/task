import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public _HttpClient: HttpClient) {}
  getAllUsers(): Observable<any> {
    return this._HttpClient.get('https://reqres.in/api/users?per_page=12')
  }
}
