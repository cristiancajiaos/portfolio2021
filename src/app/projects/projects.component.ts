import { PortfolioElement } from './../shared/interfaces/portfolio-element';
import { ProjectService } from './project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  loading = true;
  portfolioElements: PortfolioElement[] = [];

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

  constructor(
    private project: ProjectService
  ) {}

  ngOnInit(): void {
    this.project.getProjects().subscribe((portfolioElements) => {
      this.portfolioElements = portfolioElements
      this.loading = false;
    });
  }
}
