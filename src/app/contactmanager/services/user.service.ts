import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private _users: BehaviorSubject<User[]>;
  private dataStore: {
    users: User[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }
  get users(): Observable<User[]> {
    return this._users.asObservable();
  }
  loadAll() {
    const useersUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(useersUrl).subscribe(
      (data) => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      },
      (error) => {
        console.log('Failed to fetch users');
      }
    );
  }
}
