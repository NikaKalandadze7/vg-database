import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Game } from '../../core/interfaces/games.interface';

export const selectFavorites = createFeatureSelector<Game[]>('favorites');

export const selectFavoriteCount = createSelector(
  selectFavorites,
  (favorites) => favorites.length
);

export const selectIsFavorite = (id: number) =>
  createSelector(selectFavorites, (favorites) =>
    favorites.some((fav) => fav.id === id)
  );
