import { Component, Input } from '@angular/core';
import { Game } from '../../core/interfaces/games.interface';
import { StarRatingComponent } from '../ratings/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { FavoriteService } from '../../core/services/favorite.service';

@Component({
  selector: 'app-game-card',
  imports: [StarRatingComponent, CommonModule, RouterLink, MatIconModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css',
})
export class GameCardComponent {
  @Input() item!: Game;
  constructor(
    private authService: AuthService,
    private favoriteService: FavoriteService
  ) {}
  get loggedIn(): boolean {
    return this.authService.loggedIn();
  }
  get isFavorite(): boolean {
    return this.favoriteService.isGameInFavorites(this.item.id);
  }
  addToFavorites(game: Game) {
    this.favoriteService.addGameToFavorites(game);
    console.log(game.name, 'was added to favorites');
  }
  removeFromFavorites(gameId: number) {
    this.favoriteService.removeGameFromFavorites(gameId);
    console.log(gameId, 'was removed from favorites');
  }
}
