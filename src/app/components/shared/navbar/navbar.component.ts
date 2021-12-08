import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    } else {
      this.username = 'anónimo';
    }
  }



  salir() {
    this.auth.logout();
    this.router.navigateByUrl('/principal');
  }
}
