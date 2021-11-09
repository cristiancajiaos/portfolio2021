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
