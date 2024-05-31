import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    SweetAlert2Module
  ],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent implements OnInit{

  protected fileName: string = '';
  protected uploadedImg: boolean = false;
  protected post: Post = this._postService.getNewPost();
  protected modalPostActive: boolean = false;
  protected loadingImg: boolean = false;

  protected buttons = {
    upImage: '¡Sube tu imagen!',
    savePost: 'Publicar',
    chooseFile: 'Selecciona una imagen'
  }

  protected labels = {
    title: 'Ingresa un título para tu publicación'
  }

  protected messajes = {
    postSaved: '¡Publicación terminada!'
  }

  public constructor(
    private _postService: PostService
  ){ }

  ngOnInit(): void {
    
  }

  protected changedFile(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const reader = new FileReader();

      reader.readAsDataURL(input.files[0]);
      this.fileName = input.files[0].name;

      this.loadingImg = true;

      this._postService.upImg(input.files[0]).subscribe(
        response => {
          this.uploadedImg = true;
          this.post.urlResource = response.ruta;
          this.loadingImg = false;
        }
      );
    } else {
      this.fileName = '';
    }
  }

  protected save() {
    this._postService.save(this.post).subscribe(
      result => {
        this.closeModal();

        Swal.fire({
          icon: "success",
          title: this.messajes.postSaved,
          showConfirmButton: false
        });
      }
    )
  }

  protected closeModal() {
    this.post.title = '';
    this.post.urlResource = '';
    this.fileName = '';
    this.uploadedImg = false;

    this._postService.postAdded.emit(true);
    
    this.modalPostActive = false;
  }

}