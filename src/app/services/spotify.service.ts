import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor( private http: HttpClient ) { 
    console.log('Spotify Service listo!!');
  }
  getQuery( query:string){
    const url = 'https://api.spotify.com/v1/'+ query;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCGHyv8wscTNVa1yYbZNr5lewMGRTShzpwl5fYNyU9cL0MVkVTfzqTkdPhey-iom9dYZacG6mzU2FAeU0s'
    });
    return this.http.get( url, { headers } );
  } 
  getNewReleases(){
    return this.getQuery('browse/new-releases?country=AR&limit=20').pipe(map(data => {
       return data['albums'].items;
    }));
  }
  getArtistas( termino:string ){
    return this.getQuery('search?q='+ termino +'&type=track%2Cartist&market=AR').pipe(map(data => {
      return data['artists'].items;
    }));
  }
  getArtista( id:string ){
    return this.getQuery('artists/'+ id);
  }
  getTopTracks( id:string ){
    return this.getQuery('artists/'+ id + '/top-tracks?country=us').pipe(map( data => data['tracks']));
  }
  
}

