import { Component, OnInit } from '@angular/core';
import { LastFmService } from '../lastfm.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artists$: Observable<any[]>;

  constructor(private api: LastFmService) { }

  loadArtists(): void {
    this.artists$ = this.api.searchArtist({ artist: 'a' });
  }

  ngOnInit(): void {
    this.loadArtists();
  }
}
