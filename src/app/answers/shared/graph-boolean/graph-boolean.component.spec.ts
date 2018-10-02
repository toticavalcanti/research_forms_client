import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphBooleanComponent } from './graph-boolean.component';

describe('GraphBooleanComponent', () => {
  let component: GraphBooleanComponent;
  let fixture: ComponentFixture<GraphBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
