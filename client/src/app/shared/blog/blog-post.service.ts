import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogPostService {

  public API = '//localhost:8080';
  public BLOG_API = this.API + '/blog/post';

  constructor(private http: HttpClient) { }

  save(post: any): Observable<any> {
    let result: Observable<Object>;

    result = this.http.post(this.BLOG_API, post);

    return result;
  }

}
