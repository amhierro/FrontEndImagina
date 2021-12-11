import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UsuarioModel} from '../../models/usuario.model';
import {NgForm} from '@angular/forms';
import {FilmModel} from '../../models/filmModel';
import {FilmService} from '../../services/film.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: UsuarioModel = new UsuarioModel();

  favFilms: FilmModel[] = [];

  horror: boolean = false;
  drama: boolean = false;
  fantasy: boolean = false;
  thriller: boolean = false;
  action: boolean = false;
  crime: boolean = false;
  adventure: boolean = false;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private filmService: FilmService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log("Parametro recibido: " + id);
    this.getUser(id);
  }

  getUser(id: string) {
    this.userService.getUserById(id).subscribe((resp: UsuarioModel) => {
      // console.log(resp);
      this.user = resp;
      if (this.user.favGenders.indexOf('Horror') > -1) {
        this.horror = true;
      }
      if (this.user.favGenders.indexOf('Drama') > -1) {
        this.drama = true;
      }
      if (this.user.favGenders.indexOf('Fantasy') > -1) {
        this.fantasy = true;
      }
      if (this.user.favGenders.indexOf('Thriller') > -1) {
        this.thriller = true;
      }
      if (this.user.favGenders.indexOf('Action') > -1) {
        this.action = true;
      }
      if (this.user.favGenders.indexOf('Crime') > -1) {
        this.crime = true;
      }
      if (this.user.favGenders.indexOf('Adventure') > -1) {
        this.adventure = true;
      }

      this.getFavFilms(this.user.favFilms);

    });
  }

  getFavFilms(favFilms: Array<string>) {
    // let favoritos: filmModel[] = [];
    for (let filmId of favFilms) {
      this.filmService.getFilm(filmId).subscribe(
        resp => {
          this.favFilms.push(resp);
        }, (err) => {
          console.log(err);
        }
      );
    }
  }


  guardar(form: NgForm) {
    console.log(form.value);

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
    this.user.favGenders = generos;

    this.putUser();
  }

  putUser() {
    this.userService.putUser(this.user).subscribe(

    );
  }

}
