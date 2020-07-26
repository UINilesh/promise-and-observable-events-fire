import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { CountryService } from './country.service'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableExampleComponent,
    PromiseExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
