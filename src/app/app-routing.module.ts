import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [
    { path: 'blogs', component: BlogsComponent },
    { path: 'blog/:id', component: BlogComponent },
    { path: 'lessons', component: LessonsComponent },
    { path: 'lesson/:id', component: LessonComponent }
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
