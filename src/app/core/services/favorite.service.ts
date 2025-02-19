import { Injectable, signal, WritableSignal } from '@angular/core';
import { Game } from '../interfaces/games.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoriteItemsSignal: WritableSignal<Game[]> = signal([]);

  getFavoriteGames() {
    return this.favoriteItemsSignal.asReadonly();
  }

  addGameToFavorites(game: Game) {
    const currentFavorites = this.favoriteItemsSignal();
    const itemIndex = currentFavorites.findIndex((item) => item.id === game.id);

    if (itemIndex === -1) {
      this.favoriteItemsSignal.set([...currentFavorites, game]);
    }
  }

  removeGameFromFavorites(gameId: number) {
    const updatedFavorites = this.favoriteItemsSignal().filter(
      (item) => item.id !== gameId
    );
    this.favoriteItemsSignal.set(updatedFavorites);
  }

  isGameInFavorites(gameId: number): boolean {
    const currentFavorites = this.favoriteItemsSignal();
    return currentFavorites.some((item) => item.id === gameId);
  }
}
