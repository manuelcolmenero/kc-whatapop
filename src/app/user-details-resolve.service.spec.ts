import { TestBed, inject } from '@angular/core/testing';

import { UserDetailsResolveService } from './user-details-resolve.service';

describe('UserDetailsResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailsResolveService]
    });
  });

  it('should be created', inject([UserDetailsResolveService], (service: UserDetailsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
