import { TestBed } from '@angular/core/testing';

import { LastFmService } from './lastfm.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastFmService = TestBed.get(LastFmService);
    expect(service).toBeTruthy();
  });
});
