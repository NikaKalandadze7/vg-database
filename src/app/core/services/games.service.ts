import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}
  private readonly URL: string = 'https://api.rawg.io/api';
  private readonly API_KEY: string = '0f86bbcc3caf48169da110085b82181f';
  getGames(): Observable<any> {
    const params = new HttpParams().set('key', this.API_KEY);
    return this.http.get(`${this.URL}/games`, { params });
  }
}
