import { TestBed } from '@angular/core/testing';
import { LastFmService } from './lastfm.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: LastFmService = TestBed.get(LastFmService);
    expect(service).toBeTruthy();
  });
});
