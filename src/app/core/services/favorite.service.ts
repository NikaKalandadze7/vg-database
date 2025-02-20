import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Game } from '../interfaces/games.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoriteItemsSubject = new BehaviorSubject<Game[]>([]);
  favoriteItems$: Observable<Game[]> = this.favoriteItemsSubject.asObservable();

  constructor(private authService: AuthService) {}

  getFavoriteGames(): Game[] {
    return this.favoriteItemsSubject.getValue();
  }

  addGameToFavorites(game: Game) {
    const currentFavorites = this.getFavoriteGames();
    if (!currentFavorites.some((item) => item.id === game.id)) {
      const updatedFavorites = [...currentFavorites, game];
      this.favoriteItemsSubject.next(updatedFavorites);
      this.saveFavorites(updatedFavorites);
    }
  }

  removeGameFromFavorites(gameId: number) {
    const updatedFavorites = this.getFavoriteGames().filter(
      (item) => item.id !== gameId
    );
    this.favoriteItemsSubject.next(updatedFavorites);
    this.saveFavorites(updatedFavorites);
  }

  isGameInFavorites(gameId: number): Observable<boolean> {
    return this.favoriteItems$.pipe(
      map((favorites) => favorites.some((item) => item.id === gameId))
    );
  }

  private saveFavorites(favorites: Game[]): void {
    if (this.authService.loggedIn()) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
}
