import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {filmModel} from '../../models/film.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  allFilms: filmModel[] = [];

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
    this.getAllFilms();
  }

  getAllFilms(){
    this.filmService.getAllFilms()
      .subscribe( (data: any) => {
        this.allFilms = data;
        console.log(this.allFilms);
      })
  }

  // getAllFilms(){
  //   this.filmService.getAllFilms().subscribe(
  //     resp => {
  //       this.allFilms = resp;
  //       console.log(this.allFilms);
  //     }, (err) => {
  //       console.log(err);
  //       Swal.fire({
  //         title: 'Error GET films',
  //         text: 'Espere por favor...'
  //       });
  //     });
  // }

}
