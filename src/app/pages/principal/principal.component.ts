import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {FilmModel} from '../../models/filmModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  allFilms: FilmModel[] = [];

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
    this.getAllFilms();
  }

  getAllFilms(){
    this.filmService.getAllFilms()
      .subscribe( (data: any) => {
        this.allFilms = data;
        // console.log(this.allFilms);
      });
  }

}
