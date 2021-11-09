import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  loading = true;

  projects = [
    {
      title: 'Project 1',
      bgUrl: 'https://via.placeholder.com/1920x1080/f00/fff',
    },
    {
      title: 'Project 2',
      bgUrl: 'https://via.placeholder.com/1920x1080/ff0/f0f',
    },
    {
      title: 'Project 3',
      bgUrl: 'https://via.placeholder.com/1920x1080/f00/ff0',
    },
    {
      title: 'Project 4',
      bgUrl: 'https://via.placeholder.com/1920x1080/fff/0ff',
    },
    {
      title: 'Project 5',
      bgUrl: 'https://via.placeholder.com/1920x1080/000/0ff',
    },
    {
      title: 'Project 6',
      bgUrl: 'https://via.placeholder.com/1920x1080/000/00f',
    },
    {
      title: 'Project 7',
      bgUrl: 'https://via.placeholder.com/1920x1080/000/f0f',
    },
    {
      title: 'Project 8',
      bgUrl: 'https://via.placeholder.com/1920x1080/ff0/00f',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
