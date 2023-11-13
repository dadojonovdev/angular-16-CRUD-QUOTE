import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Quote } from '../model/quote.model';

const baseUrl = 'http://localhost:3000/quotes'

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Quote[]>{
    return this.http.get<Quote[]>(baseUrl);
  }

  get(id: number): Observable<Quote>{
    return this.http.get<Quote>(`${baseUrl}/${id}`);
  }

  createQuote(data: Quote): Observable<Quote>{
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: Quote): Observable<Quote>{
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`)
  }
}
