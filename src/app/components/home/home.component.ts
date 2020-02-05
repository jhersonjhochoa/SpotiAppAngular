import { Component, ɵConsole } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean = false;
  errorMsg: string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.newSongs = data;
      this.loading = false;
    }, ( err ) => {
      this.error = true;
      this.errorMsg = err.error.message;
    });
  }
}
