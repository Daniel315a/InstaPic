import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-viewer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './img-viewer.component.html',
  styleUrl: './img-viewer.component.css'
})
export class ImgViewerComponent {

  protected post: Post = this._postService.getNewPost();
  protected modalActive: boolean = false;

  protected labels = {
    comments: 'Comentarios'
  };

  constructor(
    private _postService: PostService
  ){
    this._postService.establishedPost.subscribe(
      post => {
        this.modalActive = true;
        this.post = post;
      }
    );
  }

}
