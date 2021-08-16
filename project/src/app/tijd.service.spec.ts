import { TestBed } from '@angular/core/testing';

import { TijdService } from './tijd.service';

describe('TijdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TijdService = TestBed.get(TijdService);
    expect(service).toBeTruthy();
  });
});
