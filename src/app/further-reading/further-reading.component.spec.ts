import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherReadingComponent } from './further-reading.component';

describe('FurtherReadingComponent', () => {
  let component: FurtherReadingComponent;
  let fixture: ComponentFixture<FurtherReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurtherReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurtherReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
