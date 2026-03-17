import { provideRouter } from '@angular/router';
import { routes } from './app.routes.server';

export const serverProviders = [
  provideRouter(routes)
];

export const config = serverProviders;