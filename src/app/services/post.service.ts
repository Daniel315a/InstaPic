import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../models/post';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly apiUrl: string = environment.API_URL;
  private readonly imgServerUrl: string = environment.IMG_SERVER_URL;
  private currentUserApp: User = this._userService.getNewUser();
  public postAdded: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _httpClient: HttpClient,
    private _userService: UserService
  ) { 
    this._userService.user.subscribe(
      user => { this.currentUserApp = user }
    );
  }

  public getNewPost(): Post {
    return {
      id: 0,
      user: this.currentUserApp,
      title: '',
      urlResource: '',
      date: new Date()
    }
  }

  public upImg(img: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('img', img);

    return this._httpClient.post(this.imgServerUrl, formData);
  }

  public save(post: Post): Observable<any> {
    const url = this.apiUrl + 'posts';

    const params: HttpParams = new HttpParams().
    set('user', post.user.id).
    set('urlResource', post.urlResource).
    set('title', post.title);

    return this._httpClient.post(url, params);
  }

  public getByCurrentUser() {
    const url = this.apiUrl + 'posts' + '/' + this.currentUserApp.id;

    return this._httpClient.get(url);
  } 

}
