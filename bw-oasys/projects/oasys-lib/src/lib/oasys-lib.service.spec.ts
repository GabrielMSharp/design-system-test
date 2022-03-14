import { TestBed } from '@angular/core/testing';

import { OasysLibService } from './oasys-lib.service';

describe('OasysLibService', () => {
  let service: OasysLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OasysLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
