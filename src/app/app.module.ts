import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { SmoothScrollDirective, SmoothScrollToDirective } from './ng2-smooth-scroll.directive';


@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
