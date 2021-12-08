import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {UsuarioModel} from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/api';

  constructor( private http: HttpClient ) { }

  getAllUsers(){
    return this.http.get(`${this.url}/users/`)
      .pipe(map(resp => {
        return resp;
      }));
  }

  getUser(id: string){
    return this.http.get(`${this.url}/user/`+ id);
  }

  postUser(user: UsuarioModel){
    return this.http.post(`${this.url}/user/`, user);
  }

  deleteUser(id: string){
    return this.http.delete(`${this.url}/user/`+ id);
  }

  putUser(user: UsuarioModel){
    return this.http.put(`${this.url}/user/` + user.id, user);
  }
}
