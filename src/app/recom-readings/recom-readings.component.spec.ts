import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomReadingsComponent } from './recom-readings.component';

describe('RecomReadingsComponent', () => {
  let component: RecomReadingsComponent;
  let fixture: ComponentFixture<RecomReadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomReadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
