import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnroleeDetailsComponent } from './enrolee-details.component';

describe('EnroleeDetailsComponent', () => {
  let component: EnroleeDetailsComponent;
  let fixture: ComponentFixture<EnroleeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnroleeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnroleeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
