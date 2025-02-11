import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { queryParams } from '../interfaces/queryParams.interface';
import { API_KEY, API_URL } from '../../shared/api.consts';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}
  private readonly URL: string = API_URL;
  private readonly API_KEY: string = API_KEY;

  getGames(queryParams?: queryParams): Observable<any> {
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
    }

    return this.http.get(`${this.URL}/games`, { params });
  }
}
