import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastFmService {

  private _config = {
    api_key: '02ec4e9d3a6dec29749f9d0a2cf3f598',
    lang: 'ru',
    format: 'json',
  }

  constructor(private http: HttpClient) { }

  private _fetch(_params): Observable<any> {
    const params = { ..._params, ...this._config };
    return this.http.get(`https://ws.audioscrobbler.com/2.0/`, { params });
  }

  getAlbum(_params): Observable<any> {
    const params = Object.assign({ method: 'album.getinfo' }, _params);
    return this._fetch(params)
      .pipe(
        map(({ album }) => album)
      );
  }

  searchArtist(_params): Observable<any> {
    const params = Object.assign({
      method: 'artist.search',
      limit: 12
    }, _params);
    return this._fetch(params)
      .pipe(
        map(({ results }) => results),
        map(({ artistmatches }) => artistmatches),
        map(({ artist }) => artist)
      );
  }
}
