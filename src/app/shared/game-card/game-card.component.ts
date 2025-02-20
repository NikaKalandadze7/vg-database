import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Game } from '../../core/interfaces/games.interface';
import { StarRatingComponent } from '../ratings/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { FavoriteService } from '../../core/services/favorite.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, StarRatingComponent],
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit, OnDestroy {
  @Input() item!: Game;
  isFavorite = false;
  private subscription!: Subscription;

  constructor(
    private authService: AuthService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.subscription = this.favoriteService
      .isGameInFavorites(this.item.id)
      .subscribe((isFav) => {
        this.isFavorite = isFav;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  addToFavorites(game: Game) {
    this.favoriteService.addGameToFavorites(game);
  }

  removeFromFavorites(gameId: number) {
    this.favoriteService.removeGameFromFavorites(gameId);
  }
}
