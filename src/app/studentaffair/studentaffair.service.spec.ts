import { TestBed } from '@angular/core/testing';

import { StudentaffairService } from './studentaffair.service';

describe('StudentaffairService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentaffairService = TestBed.get(StudentaffairService);
    expect(service).toBeTruthy();
  });
});
