import { Component, OnInit, Input } from '@angular/core';
import {Lesson} from '../lesson';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() lesson: Lesson;
  constructor(private route: ActivatedRoute, private lessonService: LessonService, private location: Location) { }

  ngOnInit() {
    this.getLesson();
  }

  getLesson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.lessonService.getLesson(id)
    .subscribe(lesson => this.lesson = lesson);
  }

}
