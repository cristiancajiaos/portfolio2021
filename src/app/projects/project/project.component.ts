import { PortfolioElement } from './../../shared/interfaces/portfolio-element';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  loading = true;

  id: number = 0;
  portfolioElement: PortfolioElement;
  isPortfolioElement = false;

  title: string = 'Title';
  backgroundImage: string = 'https://via.placeholder.com/1920x1080/f00/fff';

  showFlag = false;
  selectedImageIndex = -1;
  imageObject: Array<object> = [];

  currentBackgroundProperties = {};

  /* backgroundPosition: 'center', */

  backgroundDefaultProperties = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private project: ProjectService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = parseInt(params.id, 10);
        this.getProject();
      }
    });
  }

  getProject(): void {
    this.project.getProject(this.id).subscribe((project) => {
      console.log(project);
      if (project) {
        this.portfolioElement = project;
        this.backgroundImage = this.portfolioElement.imgUrl;
        this.setBackgroundImage();
        this.isPortfolioElement = true;
      } else {
        this.isPortfolioElement = false;
      }
      this.loading = false;
    });
  }

  setBackgroundImage(): void {
    this.currentBackgroundProperties = {
      backgroundImage: `url(${this.backgroundImage})`,
      ...this.backgroundDefaultProperties,
    };

    this.imageObject[0] = {
      image: this.backgroundImage,
    };
  }

  showLightbox(index: number): void {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler(): void {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }

  proyectUsed(tool: string): string {
    return `En este proyecto se usó ${tool}`
  }
}
