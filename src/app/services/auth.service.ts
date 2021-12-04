import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuarioModel} from '../models/usuario.model';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api';
  private genericAvatar = '';
  private genericRol = 'BASIC';
  private apikey = '';
  private userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    // console.log(JSON.stringify(usuario));
    return this.http.get(
      `${this.url}/login/` + usuario.email + `/` + usuario.password)
      .pipe(map(resp => {
        // console.log('Entró en el map del rxjs');
        // this.guardarToken(resp['idToken']); // Cuando el back devuelva token, descomento esta linea
        this.guardarToken("TOKEN FICTICIO")
        return resp;
      }));
  }

  nuevoUsuario(usuario: UsuarioModel) {
    usuario.rol = this.genericRol;
    usuario.avatar = this.genericAvatar;
    // console.log(JSON.stringify(usuario));
    return this.http.post(
      `${this.url}/user`, usuario)
      .pipe(map(resp => {
        console.log('Entró en el map del rxjs');
        // this.guardarToken(resp['idToken']); // Cuando el back devuelva token, descomento esta linea
        this.guardarToken("TOKEN FICTICIO")
        return resp;
      }));
  }

  guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
  }

  estaAutenticado(): boolean{
    return this.userToken.length > 2;
  }

}
