import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GamesComponent } from './pages/games/games.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { DevelopersComponent } from './pages/developers/developers.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'developers', component: DevelopersComponent },

  { path: 'log-in', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];
