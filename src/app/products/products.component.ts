import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LastFmService } from '../lastfm.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  artists$: Observable<any[]>;

  constructor(private api: LastFmService) { }

  loadArtists(): void {
    this.artists$ = this.api.searchArtist({ artist: 'b' });
  }

  ngOnInit(): void {
    this.loadArtists();
  }

}
