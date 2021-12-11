import {Component, OnInit} from '@angular/core';
import {FilmModel} from '../../models/filmModel';
import {UsuarioModel} from '../../models/usuario.model';
import {FilmService} from '../../services/film.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allFilms: FilmModel[] = [];
  usuario: UsuarioModel;

  constructor(private filmService: FilmService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getUsuarioByUsername(this.getUsername());
    this.getAllFilms();
  }

  like(cardId: string) {
    this.usuario.favFilms.push(cardId);
    this.updateUsuario();
  }

  disLike(cardId: string) {
    const index = this.usuario.favFilms.indexOf(cardId, 0);
    if (index > -1) {
      this.usuario.favFilms.splice(index, 1);
    }
    this.updateUsuario();
  }

  updateUsuario(){
    this.userService.putUser(this.usuario)
      .subscribe(
        resp => {
          console.log(resp);
        }, (err) => {
          console.log(err);
        });
  }

  getUsername(): string {
    let username;
    if (localStorage.getItem('username')) {
      username = localStorage.getItem('username');
    } else {
      username = 'anónimo';
    }
    return username;
  }

  getUsuarioByUsername(username: string) {
    this.userService.getUserByUsername(username)
      .subscribe(
        resp => {
          this.usuario = resp;
        }, (err) => {
          console.log(err);
        });
  }

  getAllFilms() {
    this.filmService.getAllFilms()
      .subscribe((data: any) => {
        this.allFilms = data;
        // console.log(data);
      });
  }

}
