import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    RouterModule
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {

}
