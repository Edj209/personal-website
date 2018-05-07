import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ResumePageComponent} from './resume-page/resume-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/resume-page', pathMatch: 'full'},
  {path: 'resume-page', component: ResumePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
