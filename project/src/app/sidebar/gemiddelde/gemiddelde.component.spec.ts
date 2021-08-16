import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemiddeldeComponent } from './gemiddelde.component';

describe('GemiddeldeComponent', () => {
  let component: GemiddeldeComponent;
  let fixture: ComponentFixture<GemiddeldeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemiddeldeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemiddeldeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
