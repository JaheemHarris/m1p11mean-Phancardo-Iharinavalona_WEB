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
  
  protected postRequest<T, R = any>(
    endpoint: string,
    data: T,
    headers?: HttpHeaders
  ): Observable<R> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<R>(url, data, { headers });
  }

  protected getByIdRequest<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
  }

  protected editRequest<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, body);
  }

  protected editPatchRequest<T>(endpoint: string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${endpoint}`, body);
  }

  protected deleteRequest<T>(endpoint: string): Observable<any>{
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`);
  }
}
