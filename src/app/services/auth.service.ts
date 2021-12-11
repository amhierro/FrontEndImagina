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
  private username: string = 'anónimo';

  constructor(private http: HttpClient) {
    this.leerToken();
    this.leerUsername();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }




  login(usuario: UsuarioModel) {
    return this.http.get(
      `${this.url}/login/` + usuario.email + `/` + usuario.password)
      .pipe(map(resp => {
        // console.log(resp);
        // this.guardarToken(resp['idToken']); // Cuando el back devuelva token, descomento esta linea
        if(resp != null){
          this.guardarToken("TOKEN FICTICIO");
          let usuario: UsuarioModel = resp;
          this.guardarUsername(usuario.username);
        }
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

  guardarUsername(username: string){
    this.username = username;
    localStorage.setItem('username', username)
  }

  leerUsername() {
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    } else {
      this.username = 'anónimo';
    }
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
