import { Component, OnInit } from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    ImageViewerComponent,
    CommonModule
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

}