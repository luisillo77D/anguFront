import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }

  public get(endpoint: string):Observable<any> {
    return this.http.get<any>(this.API_URL + endpoint);
  }

  public post(endpoint: string, data: any):Observable<any> {
    return this.http.post<any>(this.API_URL + endpoint, data);
  }

  public put(endpoint: string, data: any):Observable<any> {
    return this.http.put<any>(this.API_URL + endpoint, data);
  }

  public delete(endpoint: string):Observable<any> {
    return this.http.delete<any>(this.API_URL + endpoint);
  }
}
