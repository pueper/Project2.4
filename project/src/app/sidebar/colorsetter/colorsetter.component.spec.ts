import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsetterComponent } from './colorsetter.component';

describe('ColorsetterComponent', () => {
  let component: ColorsetterComponent;
  let fixture: ComponentFixture<ColorsetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
