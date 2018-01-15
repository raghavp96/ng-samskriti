import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from './blogs/blogs.component';
import { LessonsComponent } from './lessons/lessons.component';

const routes: Routes = [
    { path: 'blogs', component: BlogsComponent },
    { path: 'lessons', component: LessonsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
