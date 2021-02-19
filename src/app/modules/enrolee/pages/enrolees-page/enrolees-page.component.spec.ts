import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnroleesPageComponent } from './enrolees-page.component';

describe('EnroleesPageComponent', () => {
  let component: EnroleesPageComponent;
  let fixture: ComponentFixture<EnroleesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnroleesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnroleesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
