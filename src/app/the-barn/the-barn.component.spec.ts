import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBarnComponent } from './the-barn.component';

describe('TheBarnComponent', () => {
  let component: TheBarnComponent;
  let fixture: ComponentFixture<TheBarnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBarnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
