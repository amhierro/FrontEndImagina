import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsuarioModel} from '../../models/usuario.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  usuario: UsuarioModel;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    if ( form.invalid ) { return; }
    // console.log(form.value);
    // console.log(this.usuario);
    this.userService.postUser(this.usuario).subscribe( resp => {
      console.log(resp);
      this.router.navigateByUrl('/users');
    }, (err) => {
      console.log(err);
    });
  }

}
