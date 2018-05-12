import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { SmoothScrollDirective, SmoothScrollToDirective } from './ng2-smooth-scroll.directive';
import { BlogPageComponent } from './blog-page/blog-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
