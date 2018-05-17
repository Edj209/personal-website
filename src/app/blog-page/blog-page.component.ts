import { Component, OnInit } from '@angular/core';

import { BlogService } from '../shared/blog/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  posts: Array<any>;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getAll().subscribe(data => {
      this.posts = data;
    });
  }

}
