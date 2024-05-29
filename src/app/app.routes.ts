import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { BusacarComponent } from './components/busacar/busacar.component';
import { ChatComponent } from './components/chat/chat.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { authGuard } from './guards/auth.guard';



export const routes: Routes = [
    {
        path: '',
        component: InicioComponent

    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard]
    },
    {
        path: 'buscar',
        component: BusacarComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }


];
