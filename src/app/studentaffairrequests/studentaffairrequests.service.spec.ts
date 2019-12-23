import { TestBed } from '@angular/core/testing';

import { StudentaffairrequestsService } from './studentaffairrequests.service';

describe('StudentaffairrequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentaffairrequestsService = TestBed.get(StudentaffairrequestsService);
    expect(service).toBeTruthy();
  });
});
