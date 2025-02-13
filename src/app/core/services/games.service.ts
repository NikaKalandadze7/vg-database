import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { queryParams } from '../interfaces/queryParams.interface';
import { API_KEY, API_URL } from '../../shared/api.consts';
import { ApiResponse, Game } from '../interfaces/games.interface';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}
  private readonly URL: string = API_URL;
  private readonly API_KEY: string = API_KEY;

  getGames(queryParams?: queryParams): Observable<ApiResponse> {
    let params = new HttpParams().set('key', this.API_KEY);

    if (queryParams) {
      if (queryParams.page !== undefined) {
        params = params.set('page', queryParams.page.toString());
      }
      if (queryParams.page_size !== undefined) {
        params = params.set('page_size', queryParams.page_size.toString());
      }
      if (queryParams.search) {
        params = params.set('search', queryParams.search);
      }
      if (queryParams.platforms) {
        params = params.set('platforms', queryParams.platforms);
      }
      if (queryParams.stores) {
        params = params.set('stores', queryParams.stores);
      }
      if (queryParams.developers) {
        params = params.set('developers', queryParams.developers);
      }
      if (queryParams.tags) {
        params = params.set('tags', queryParams.tags);
      }
      if (queryParams.metacritic) {
        params = params.set('metacritic', queryParams.metacritic);
      }
      if (queryParams.dates) {
        params = params.set('updated', queryParams.dates);
      }
    }

    return this.http.get<ApiResponse>(`${this.URL}/games`, { params });
  }
  getSpecificGame(id: string): Observable<Game> {
    const params = new HttpParams().set('key', this.API_KEY);

    return this.http.get<Game>(`${this.URL}/games/${id}`, { params });
  }
}
