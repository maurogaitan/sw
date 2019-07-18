import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  artista: any = {};
  loadingArtista :boolean;
  imgUrl:string;
  topTracks:any[] = [];
  constructor(private router: ActivatedRoute,
    private spotify:SpotifyService) { 
    this.loadingArtista = true;
    this.router.params.subscribe( params => {
     this.getArtistaQ(params['id']);
     this.getTopTracksQ(params['id']);
    });
  }
  getArtistaQ(id:string){
    this.spotify.getArtista(id).subscribe( data => {
      this.artista = data;
      this.imgUrl = this.artista.images[0].url;
      this.loadingArtista = false;
    });
  }
  getTopTracksQ(id:string){
    this.spotify.getTopTracks(id).subscribe( data => {
      this.topTracks = data;
      console.log(this.topTracks)
    });
  }
}
