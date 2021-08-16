import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeleftComponent } from './timeleft.component';

describe('TimeleftComponent', () => {
  let component: TimeleftComponent;
  let fixture: ComponentFixture<TimeleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
