import {Injectable} from '@angular/core';
import {FilmModel} from '../models/filmModel';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private url = 'http://localhost:8080/api';

  constructor( private http: HttpClient ) {
  }

  getAllFilms() {
    return this.http.get(`${this.url}/films/`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  getFilm(id: string){
    return this.http.get(`${this.url}/film/`+ id);
  }

  postFilm( film: FilmModel){
    return this.http.post(`${this.url}/film/`, film);
  }

  putFilm(film: FilmModel){
    return this.http.put(`${this.url}/film/` + film.id, film);
  }

  deleteFilm(id: string){
    return this.http.delete(`${this.url}/film/`+ id);
  }

}
