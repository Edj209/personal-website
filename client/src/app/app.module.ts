import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { SmoothScrollDirective, SmoothScrollToDirective } from './ng2-smooth-scroll.directive';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogService } from './shared/blog/blog.service';
import { PostPageComponent } from './post-page/post-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    BlogPageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
