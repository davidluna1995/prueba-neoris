import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonajeService {

  private apiUrl = environment.url;

  constructor(private http: HttpClient) { }

  getListadoPersonajes():Observable<any>{
    return this.http.get(`${this.apiUrl}/character`);
  }

  getListadoEpisodios():Observable<any>{
    return this.http.get(`${this.apiUrl}/episode`);
  }
}
