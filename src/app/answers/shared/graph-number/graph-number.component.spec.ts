import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNumberComponent } from './graph-number.component';

describe('GraphNumberComponent', () => {
  let component: GraphNumberComponent;
  let fixture: ComponentFixture<GraphNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
