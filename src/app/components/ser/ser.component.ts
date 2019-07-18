import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ser',
  templateUrl: './ser.component.html'
})
export class SerComponent implements OnInit {
  canciones:any[] = [];
  loading:boolean;
 
   constructor(private spotify:SpotifyService,private router:Router) {

   }

  ngOnInit() {
  }
  buscar(termino){
    this.loading = true;
    this.spotify.getArtistas( termino ).subscribe( (data: any)  => {
      this.canciones = data;
      this.loading = false;
    }); 
  }

  
}
