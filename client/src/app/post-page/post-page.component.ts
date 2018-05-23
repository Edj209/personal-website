import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPostService } from '../shared/blog/blog-post.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  posts: any = {};

  constructor(private blogPostService: BlogPostService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  gotoBlog() {
    this.router.navigate(['blog-page']);
  }

  save(form: NgForm) {
    this.blogPostService.save(form).subscribe(result => {
      this.gotoBlog();
    }, error => console.log(error));
  }

}
