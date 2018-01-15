import { Injectable } from '@angular/core';

import {Lesson} from './lesson';
import {LESSONS} from './mock-lessons';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

@Injectable()
export class LessonService {
  constructor(private messageService: MessageService) { }

  getLessons(): Observable<Lesson[]> {
    this.messageService.add('LessonService: fetched lessons');
    return of(LESSONS);
  }

  getLesson(id: number): Observable<Lesson> {
    this.messageService.add(`LessonService: fetched lesson id= ${id}`);
    return of(LESSONS.find(lesson => lesson.id === id));
  }

}
