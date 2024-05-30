import { Injectable, Signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = environment.API_URL;
  public user$: BehaviorSubject<User> = new BehaviorSubject<User>(this.getNewUser());

  public get user(): Observable<User> {
    return this.user$.asObservable();
  }

  constructor(
    private _httpClient: HttpClient
  ) { }

  public save(user: User): Observable<any> {
    const url = this.apiUrl + 'users'

    const body: HttpParams = new HttpParams()
    .set('auth0Id', user.auth0Id)
    .set('nickName', user.nickName)
    .set('email', user.email)
    .set('familyName', user.familyName)
    .set('givenName', user.givenName)
    .set('birthDate', format(new Date(), 'yyyy-MM-dd'));

    return this._httpClient.post(url, body);
  }

  public getNewUser(): User {
    return {
      id: 0,
      auth0Id: '',
      nickName: '',
      email: '',
      familyName: '',
      givenName: '',
      birthDate: new Date()
    };
  }

}
