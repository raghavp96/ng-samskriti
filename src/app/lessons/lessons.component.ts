import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  lessons : Lesson[];

  constructor(private lessonService: LessonService) { }
  ngOnInit() {
    this.getLessons();
  }

  getLessons(): void {
    this.lessonService.getLessons().subscribe(lessons => this.lessons = lessons);
  }
}
