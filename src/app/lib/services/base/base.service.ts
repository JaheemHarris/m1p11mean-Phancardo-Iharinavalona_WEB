import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  protected getRequest<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
  }

  protected postRequest<T, R>(
    endpoint: string,
    data: T,
    headers?: HttpHeaders
  ): Observable<R> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<R>(url, data, { headers });
  }
}
