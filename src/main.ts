import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    // importProvidersFrom([BrowserModule, BrowserAnimationsModule]),
  ],
}).catch((err) => console.error(err));
