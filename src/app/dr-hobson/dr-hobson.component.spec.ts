import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrHobsonComponent } from './dr-hobson.component';

describe('DrHobsonComponent', () => {
  let component: DrHobsonComponent;
  let fixture: ComponentFixture<DrHobsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrHobsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrHobsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
