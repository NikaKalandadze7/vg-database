import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_KEY, API_URL } from '../../shared/api.consts';
import { Observable } from 'rxjs';
import { queryParams } from '../interfaces/queryParams.interface';

@Injectable({
  providedIn: 'root',
})
export class DevelopersService {
  constructor(private http: HttpClient) {}
  private readonly URL: string = API_URL;
  private readonly API_KEY: string = API_KEY;

  getDevs(queryParams?: queryParams): Observable<any> {
    let params = new HttpParams().set('key', this.API_KEY);

    if (queryParams) {
      if (queryParams.page !== undefined) {
        params = params.set('page', queryParams.page.toString());
      }
      if (queryParams.page_size !== undefined) {
        params = params.set('page_size', queryParams.page_size.toString());
      }
    }
    return this.http.get(`${this.URL}/developers`, { params });
  }
}
