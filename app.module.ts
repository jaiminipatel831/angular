import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TeamService } from './team.service';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ TeamService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
