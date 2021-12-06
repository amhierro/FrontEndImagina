import {Injectable} from '@angular/core';
import {filmModel} from '../models/film.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  getAllFilms() {
    return this.http.get(`${this.url}/films/`)
      .pipe(map(resp => {
        return resp;
      }));
  }
}
