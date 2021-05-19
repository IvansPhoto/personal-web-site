import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevSkillsComponent } from './dev-skills.component';

describe('DevSkillsComponent', () => {
  let component: DevSkillsComponent;
  let fixture: ComponentFixture<DevSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
