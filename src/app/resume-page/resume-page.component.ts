import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

  private fragment: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.route.fragment.subscribe(fragment => {this.fragment = fragment; });
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
  }

  // scrolls to section
  onAnchorClick ( ) {
    this.route.fragment.subscribe ( f => {
      const element = document.querySelector ( '#' + f );
      if (element) { element.scrollIntoView(true); }
    });
  }



}
