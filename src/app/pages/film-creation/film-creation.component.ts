import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {FilmModel} from '../../models/filmModel';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-film-creation',
  templateUrl: './film-creation.component.html',
  styleUrls: ['./film-creation.component.css']
})
export class FilmCreationComponent implements OnInit {

  allFilms: FilmModel[] = [];

  film = new FilmModel();

  horror: boolean = false;
  drama: boolean = false;
  fantasy: boolean = false;
  thriller: boolean = false;
  action: boolean = false;
  crime: boolean = false;
  adventure: boolean = false;

  constructor(private filmService: FilmService,
              private router: Router) {
  }

  ngOnInit() {
  }

  postFilm() {
    this.filmService.postFilm(this.film)
      .subscribe(resp => {
        // console.log(resp);
        this.router.navigateByUrl('/films');
        this.limpiaFormulario();
      });
  }

  guardar(form: NgForm) {
    // console.log(form.value);
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
    // console.log(this.film);
    this.postFilm();
  }

  limpiaFormulario(){
    this.film.titulo = '';
    this.film.director = '';
    this.film.anio = null;
    this.film.genero = null;
    this.film.sinopsis = '';
    this.film.poster = '';
    this.horror = false;
    this.drama = false;
    this.fantasy = false;
    this.thriller = false;
    this.action = false;
    this.crime = false;
    this.adventure = false;
  }

}
