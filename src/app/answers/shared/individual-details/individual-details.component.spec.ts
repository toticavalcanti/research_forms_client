import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDetailsComponent } from './individual-details.component';

describe('IndividualDetailsComponent', () => {
  let component: IndividualDetailsComponent;
  let fixture: ComponentFixture<IndividualDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
