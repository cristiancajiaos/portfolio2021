import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectMiniComponent } from './project-mini/project-mini.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectMiniComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
