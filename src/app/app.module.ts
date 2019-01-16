import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FullLayOutComponent} from './lay-out/full-layout/Full-LayOut.component';
import {SimpleLayOutComponent} from './lay-out/simple-layout/Simple-LayOut.component';
import {MainComponent} from './main-page/Main.component';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    FullLayOutComponent,
    SimpleLayOutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
