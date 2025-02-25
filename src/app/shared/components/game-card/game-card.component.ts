import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Observable, Subscription } from 'rxjs';
import { Game } from '../../../core/interfaces/games.interface';
import { AuthService } from '../../../core/services/auth.service';
import { select, Store } from '@ngrx/store';
import { addFavorite, removeFavorite } from '../../store/favorite.actions';
import { selectIsFavorite } from '../../store/favorite.selectors';
@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, StarRatingComponent],
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() item!: Game;
  isFavorite$!: Observable<boolean>;

  constructor(private authService: AuthService, private store: Store) {}

  ngOnInit() {
    this.isFavorite$ = this.store.pipe(select(selectIsFavorite(this.item.id)));
  }

  get loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  addToFavorites() {
    this.store.dispatch(addFavorite({ game: this.item }));
  }

  removeFromFavorites(gameId: number) {
    this.store.dispatch(removeFavorite({ id: gameId }));
  }
}
