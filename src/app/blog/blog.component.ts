import { Component, OnInit, Input } from '@angular/core';
import {Blog}from '../blog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  @Input() blog: Blog;
  constructor(private route: ActivatedRoute, private blogService: BlogService, private location: Location) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getBlog(id)
    .subscribe(blog => this.blog = blog);
  }

}
