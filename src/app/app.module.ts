import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';

import { BlogService } from './blog.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonService } from './lesson.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogComponent,
    MessagesComponent,
    LessonsComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BlogService, LessonService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
