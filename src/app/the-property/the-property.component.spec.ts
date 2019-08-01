import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePropertyComponent } from './the-property.component';

describe('ThePropertyComponent', () => {
  let component: ThePropertyComponent;
  let fixture: ComponentFixture<ThePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
