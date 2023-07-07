import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from "./shared";
import { HttpModule } from "@http";
import { HttpClientModule } from "@angular/common/http";
import { APP_INITIALIZERS } from "./app.initializers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [...APP_INITIALIZERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
