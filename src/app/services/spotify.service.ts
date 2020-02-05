import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCwBR6wi3LkfSwfSDjaxPBhuAKbBDvS6ZruiGhpGiHn91K0UXhTDpu-nXqRH6Aj9Pogi1qushdEpDSjaxs'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe( map( data => { return data['albums'].items; }));
  }

  getArtistas( termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map( data =>  data['artists'].items ));
  }

  getArtista( id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map( data =>  data['tracks'] ));
  }
}
