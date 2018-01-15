import { Injectable } from '@angular/core';

import {Blog} from './blog';
import {BLOGS} from './mock-blogs';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

@Injectable()
export class BlogService {
  constructor(private messageService: MessageService) { }

  getBlogs(): Observable<Blog[]> {
    this.messageService.add('BlogService: fetched blogs');
    return of(BLOGS);
  }

  getBlog(id: number): Observable<Blog> {
    this.messageService.add(`BlogService: fetched blog id= ${id}`);
    return of(BLOGS.find(blog => blog.id === id));
  }
}
