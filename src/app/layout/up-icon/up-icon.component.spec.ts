import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpIconComponent } from './up-icon.component';

describe('UpIconComponent', () => {
  let component: UpIconComponent;
  let fixture: ComponentFixture<UpIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
