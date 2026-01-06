import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  //Get all users
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  //Add a new user
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user);
  }

  //Update an existing user(PUT API)
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiURL}/${id}`, user);
  }

  //PATCH API to update part of the user data
  updateUserStatus(id: number, status:boolean): Observable<User> {
    return this.http.patch<User>(`${this.apiURL}/${id}`, { isActive: status });
  }

  //Delete a user
  deleteUser(id: number):Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
