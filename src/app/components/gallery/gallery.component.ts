import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { ImgViewerComponent } from '../img-viewer/img-viewer.component';
import { Post } from '../../models/post';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    ImgViewerComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {

  protected posts: Array<any> = [];

  constructor(
    private _postService: PostService
  ){}

  ngOnInit(): void {
    this.loadPosts();

    this._postService.postAdded.subscribe(
      result => {
        this.loadPosts();
      }
    );
  }

  protected loadPosts() {
    this._postService.getByCurrentUser().subscribe(
      result => {
        this.posts = result as Array<any>;
      }
    );
  } 

  protected setPost(post: Post) {
    this._postService.establishedPost.emit(post);
  }

}