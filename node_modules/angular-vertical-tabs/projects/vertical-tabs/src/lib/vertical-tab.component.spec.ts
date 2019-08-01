import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTabsComponent } from './material-tabs.component';

describe('VerticalTabComponent', () => {
  let component: MaterialTabsComponent;
  let fixture: ComponentFixture<MaterialTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialTabsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
