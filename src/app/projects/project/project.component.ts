import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  title: string = 'Title';
  backgroundImage: string = 'https://via.placeholder.com/1920x1080/f00/fff';

  showFlag = false;
  selectedImageIndex = -1;
  imageObject: Array<object> = [];

  currentBackgroundProperties = {};

  backgroundDefaultProperties = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  constructor() {}

  ngOnInit(): void {
    this.currentBackgroundProperties = {
      backgroundImage: `url(${this.backgroundImage})`,
      ...this.backgroundDefaultProperties,
    };

    this.imageObject[0] = {
      image: this.backgroundImage
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
}
