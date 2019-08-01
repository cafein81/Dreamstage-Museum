import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamstageComponent } from './dreamstage.component';

describe('DreamstageComponent', () => {
  let component: DreamstageComponent;
  let fixture: ComponentFixture<DreamstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
