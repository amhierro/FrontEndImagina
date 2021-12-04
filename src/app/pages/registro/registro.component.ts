import {Component, OnInit} from '@angular/core';
import {UsuarioModel} from '../../models/usuario.model';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }


  onSubmit(form: NgForm) {
    if ( form.invalid ) { return; }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario)
      .subscribe( resp => {
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err);
        Swal.fire({
          title: 'Error al registrar',
          text: 'Espere por favor...'
        });
      });
  }
}
