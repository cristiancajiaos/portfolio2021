import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-mini',
  templateUrl: './project-mini.component.html',
  styleUrls: ['./project-mini.component.scss']
})
export class ProjectMiniComponent implements OnInit {

  @Input() id: number = 0;
  @Input() title: string = 'Title';
  @Input() backgroundUrl: string = 'https://via.placeholder.com/1920x1080/f00/fff';

  currentBackgroundProperties = {};

  backgroundDefaultProperties = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  constructor() { }

  ngOnInit(): void {
    this.currentBackgroundProperties = {
      backgroundImage: `url(${this.backgroundUrl})`,
      ...this.backgroundDefaultProperties
    };
  }

  setProjectUrl(): string {
    return `/projects/${this.id}`;
  }

}
