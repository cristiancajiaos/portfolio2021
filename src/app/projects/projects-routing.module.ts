import { ProjectComponent } from './project/project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    data: {
      title: 'Proyectos'
    }
  },
  {
    path: ':id',
    component: ProjectComponent,
    data: {
      title: 'Proyecto'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
