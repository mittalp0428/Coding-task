import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnroleeListComponent } from './enrolee-list.component';

describe('EnroleeListComponent', () => {
  let component: EnroleeListComponent;
  let fixture: ComponentFixture<EnroleeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnroleeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnroleeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
