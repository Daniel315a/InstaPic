import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    GalleryComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
