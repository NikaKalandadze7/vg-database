import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../../core/interfaces/games.interface';
import { filter, map, Observable, switchMap, take } from 'rxjs';
import { GamesService } from '../../../core/services/games.service';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { select, Store } from '@ngrx/store';
import {
  addFavorite,
  removeFavorite,
} from '../../../shared/store/favorite.actions';
import { selectIsFavorite } from '../../../shared/store/favorite.selectors';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-game-details',
  imports: [CommonModule, CarouselComponent],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css',
})
export class GameDetailsComponent implements OnInit {
  game!: Game;
  gameId: string | null = null;
  gamesFromSameDev: Game[] = [];
  isFavorite$!: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private gamesService: GamesService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params) => params.get('id')),
        filter((id): id is string => !!id),
        switchMap((id) => this.gamesService.getSpecificGame(id)),
        take(1)
      )
      .subscribe((response) => {
        this.game = response;
        this.isFavorite$ = this.store.pipe(
          select(selectIsFavorite(this.game.id))
        );
        this.fetchGamesFromSameDev();
      });
  }

  get loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  addToFavorites() {
    console.log(1111111111);
    this.store.dispatch(addFavorite({ game: this.game }));
  }

  removeFromFavorites(gameId?: number) {
    if (!gameId) {
      return;
    }
    this.store.dispatch(removeFavorite({ id: gameId }));
  }
  fetchGamesFromSameDev() {
    if (this.game.developers && this.game.developers.length) {
      this.gamesService
        .getGames({
          developers: this.game.developers[0].slug,
        })
        .pipe(take(1))
        .subscribe((response) => {
          this.gamesFromSameDev = response.results;
        });
    }
  }
}
