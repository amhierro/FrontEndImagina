import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FilmService} from '../../services/film.service';
import {FilmModel} from '../../models/filmModel';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private filmService: FilmService,
              private router: Router) {
  }

  films: FilmModel[] = [];

  ngOnInit() {
    this.getAllFilms();
  }

  getAllFilms() {
    this.filmService.getAllFilms().subscribe((data: any) => {
      this.films = data;
      console.log(this.films);
    });
  }

  deleteFilm(id: string) {
    this.filmService.deleteFilm(id).subscribe(resp => {
      console.log(resp);
      this.getAllFilms();
    }, (err) => {
      console.log(err);
      this.getAllFilms();
    });
  }


}
