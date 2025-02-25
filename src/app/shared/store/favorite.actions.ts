import { createAction, props } from '@ngrx/store';
import { Game } from '../../core/interfaces/games.interface';

export const addFavorite = createAction(
  '[Favorites List] Add Favorite',
  props<{ game: Game }>()
);

export const removeFavorite = createAction(
  '[Favorites List] Remove Favorite',
  props<{ id: number }>()
);
