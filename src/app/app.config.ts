import { ApplicationConfig, NgModule, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

NgModule({ imports: [
  BrowserModule, FormsModule,HttpClient // <<<< And here
],})
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideClientHydration(),
    importProvidersFrom(HttpClient),
    provideHttpClient(withFetch()),
     FormsModule,
  ]
};
