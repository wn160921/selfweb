import { TestBed } from '@angular/core/testing';

import { ClassEntityService } from './class-entity.service';

describe('ClassEntityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassEntityService = TestBed.get(ClassEntityService);
    expect(service).toBeTruthy();
  });
});
