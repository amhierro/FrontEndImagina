import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UsuarioModel} from '../../models/usuario.model';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {
  }

  users: UsuarioModel[] = [];

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });
  }



  deleteUser(id: string){
    this.userService.deleteUser(id).subscribe( resp => {
      console.log(resp);
      this.getAllUsers();
      // this.router.navigateByUrl('/users');
    }, (err) => {
      console.log(err);
      this.getAllUsers();
    });
  }


}
