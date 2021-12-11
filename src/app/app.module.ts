import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {RegistroComponent} from './pages/registro/registro.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {PrincipalComponent} from './pages/principal/principal.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {MatCardModule} from '@angular/material';
import {UsersComponent} from './pages/users/users.component';
import {UserDetailComponent} from './pages/user-detail/user-detail.component';
import {FavFilmsComponent} from './pages/fav-films/fav-films.component';
import {FilmCreationComponent} from './pages/film-creation/film-creation.component';
import { FilmDetailComponent } from './pages/film-detail/film-detail.component';
import { UserNewComponent } from './pages/user-new/user-new.component';
import { FilmsComponent } from './pages/films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PrincipalComponent,
    FooterComponent,
    UsersComponent,
    UserDetailComponent,
    FavFilmsComponent,
    FilmCreationComponent,
    FilmDetailComponent,
    UserNewComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
