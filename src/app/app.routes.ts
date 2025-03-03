import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GamesComponent } from './pages/games/games.component';
import { GameDetailsComponent } from './pages/games/game-details/game-details.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { GenresComponent } from './pages/genres/genres.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';
import { StoresComponent } from './pages/stores/stores.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'platforms', component: PlatformsComponent },
  { path: 'stores', component: StoresComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'log-in',
    component: LogInComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: '**', component: NotFoundComponent },
];
