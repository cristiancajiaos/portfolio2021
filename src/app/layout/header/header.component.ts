import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuCollapsed = true;

  menuOptions = [
    { title: 'Home', route: 'home'},
    { title: 'Proyectos', route: 'projects' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  closeCollapse(): void {
    this.toggleCollapse();
  }

}
