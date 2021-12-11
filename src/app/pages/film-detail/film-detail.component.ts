import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmModel} from '../../models/filmModel';
import {FilmService} from '../../services/film.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film: FilmModel = new FilmModel();

  horror: boolean = false;
  drama: boolean = false;
  fantasy: boolean = false;
  thriller: boolean = false;
  action: boolean = false;
  crime: boolean = false;
  adventure: boolean = false;

  constructor( private route: ActivatedRoute,
               private filmService: FilmService ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log("Parametro recibido: " + id);
    this.getFilm(id);
  }

  getFilm(id: string){
    this.filmService.getFilm(id).subscribe((resp: FilmModel) => {
      // console.log(resp);
      this.film = resp;
      if(this.film.genero.indexOf('Horror') > -1){
        this.horror = true;
      }
      if(this.film.genero.indexOf('Drama') > -1){
        this.drama = true;
      }
      if(this.film.genero.indexOf('Fantasy') > -1){
        this.fantasy = true;
      }
      if(this.film.genero.indexOf('Thriller') > -1){
        this.thriller = true;
      }
      if(this.film.genero.indexOf('Action') > -1){
        this.action = true;
      }
      if(this.film.genero.indexOf('Crime') > -1){
        this.crime = true;
      }
      if(this.film.genero.indexOf('Adventure') > -1){
        this.adventure = true;
      }
    });
  }

  actualizaFilm(film: FilmModel){
    this.filmService.putFilm(film)
      .subscribe(resp => {
        // console.log("actualiza");
        console.log(resp);
      });
  }

  eliminar(){
    this.filmService.deleteFilm(this.film.id).subscribe(resp => {
      console.log(resp);
    });
  }

  guardar(form: NgForm) {
    let generos: string[] = [];
    if (this.horror) {
      generos.push('Horror');
    }
    if (this.drama) {
      generos.push('Drama');
    }
    if (this.fantasy) {
      generos.push('Fantasy');
    }
    if (this.thriller) {
      generos.push('Thriller');
    }
    if (this.action) {
      generos.push('Action');
    }
    if (this.crime) {
      generos.push('Crime');
    }
    if (this.adventure) {
      generos.push('Adventure');
    }
    this.film.genero = generos;
    this.actualizaFilm(this.film);
  }

}
