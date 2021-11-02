import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMiniComponent } from './project-mini.component';

describe('ProjectMiniComponent', () => {
  let component: ProjectMiniComponent;
  let fixture: ComponentFixture<ProjectMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
