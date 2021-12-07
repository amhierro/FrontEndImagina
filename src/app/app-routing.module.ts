import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {PrincipalComponent} from './pages/principal/principal.component';
import {FilmCreationComponent} from './pages/film-creation/film-creation.component';
import {FilmDetailComponent} from './pages/film-detail/film-detail.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'principal', component: PrincipalComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'filmcreation'   , component: FilmCreationComponent, canActivate: [AuthGuard]  },
  { path: 'filmdetail/:id'   , component: FilmDetailComponent, canActivate: [AuthGuard]  },
  { path: '**', redirectTo: 'principal' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
