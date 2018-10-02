import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTextComponent } from './graph-text.component';

describe('GraphTextComponent', () => {
  let component: GraphTextComponent;
  let fixture: ComponentFixture<GraphTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
