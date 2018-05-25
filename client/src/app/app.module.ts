import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { SmoothScrollDirective, SmoothScrollToDirective } from './ng2-smooth-scroll.directive';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogService } from './shared/blog/blog.service';
import { PostPageComponent } from './post-page/post-page.component';
import { BlogPostService } from './shared/blog/blog-post.service';


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
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BlogService,
    BlogPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
