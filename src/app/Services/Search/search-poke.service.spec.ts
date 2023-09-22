import { TestBed } from '@angular/core/testing';

import { SearchPokeService } from './search-poke.service';

describe('SearchPokeService', () => {
  let service: SearchPokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
