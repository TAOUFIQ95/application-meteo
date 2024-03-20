import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici
import { HttpClientModule } from '@angular/common/http'; // Assurez-vous d'importer HttpClientModule

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoService } from './services/meteo.service';

@NgModule({
declarations: [
AppComponent,
MeteoComponent
],
imports: [
BrowserModule,
FormsModule, // Ajoutez FormsModule aux imports
HttpClientModule // Ajoutez HttpClientModule aux imports
],
providers: [MeteoService],
bootstrap: [AppComponent]
})
export class AppModule { }