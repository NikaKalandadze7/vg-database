import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../core/interfaces/games.interface';
import { GameCardComponent } from '../../shared/components/game-card/game-card.component';
import { Store } from '@ngrx/store';
import {
  selectFavoriteCount,
  selectFavorites,
} from '../../shared/store/favorite.selectors';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user: any;
  favoriteGames$!: Observable<Game[]>;
  count$: Observable<number>;

  constructor(private store: Store) {
    this.favoriteGames$ = this.store.select(selectFavorites);
    this.count$ = this.store.select(selectFavoriteCount);
  }
}
