import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes.server';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
=======
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
>>>>>>> origin/dev
