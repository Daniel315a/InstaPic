import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RootComponent } from './app/components/root/root.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(RootComponent, {
  providers: [
    provideAuth0({
      domain: 'dev-qa816ztpydvidknu.us.auth0.com',
      clientId: 'vZbDThCebFHgwoyaBNyP8HuRNPoCbCld',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
  ]
});