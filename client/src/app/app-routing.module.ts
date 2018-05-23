import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumePageComponent } from './resume-page/resume-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { PostPageComponent } from './post-page/post-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/resume-page', pathMatch: 'full'},
  {path: 'resume-page', component: ResumePageComponent},
  {path: 'blog-page', component: BlogPageComponent },
  {path: 'post-page', component: PostPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
