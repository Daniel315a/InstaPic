import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { NewPostComponent } from '../new-post/new-post.component';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    GalleryComponent,
    NewPostComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  
  protected user: User = this._userService.getNewUser();

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void { 
    this._userService.user.subscribe(user => this.user = user);
  }

}
