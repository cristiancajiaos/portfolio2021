import { PortfolioElement } from './../shared/interfaces/portfolio-element';
import { ProjectService } from './project.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  loading = true;
  portfolioElements: PortfolioElement[] = [];

  private projectSubscription: Subscription;

  constructor(
    private project: ProjectService,
  ) {}

  ngOnInit(): void {
    this.projectSubscription = this.project.getProjects().subscribe((portfolioElements) => {
      this.portfolioElements = portfolioElements
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }
}
