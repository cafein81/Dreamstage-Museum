import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATourComponent } from './a-tour.component';

describe('ATourComponent', () => {
  let component: ATourComponent;
  let fixture: ComponentFixture<ATourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
