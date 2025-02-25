import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './favorite.actions';
import { Game } from '../../core/interfaces/games.interface';

export const initialState: Game[] = [];

export const favoriteReducer = createReducer(
  initialState,
  on(addFavorite, (state, { game }) =>
    state.some((fav) => fav.id === game.id) ? state : [...state, game]
  ),
  on(removeFavorite, (state, { id }) => state.filter((fav) => fav.id !== id))
);
