import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterMuseumComponent } from './enter-museum.component';

describe('EnterMuseumComponent', () => {
  let component: EnterMuseumComponent;
  let fixture: ComponentFixture<EnterMuseumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterMuseumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
