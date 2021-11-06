import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return child.snapshot.data['title']
          } else {
            return null;
          }
        }
      })
    ).subscribe((data) => {
      this.titleService.setTitle(`${data} | Portafolio de Cristian Cajiao Skarnic`);
    });
  }

}
