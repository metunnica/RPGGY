import { TestBed, inject } from '@angular/core/testing';

import { GamesResolverService } from './games-resolver.service';

describe('GamesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesResolverService]
    });
  });

  it('should be created', inject([GamesResolverService], (service: GamesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
