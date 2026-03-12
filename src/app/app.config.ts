import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};
