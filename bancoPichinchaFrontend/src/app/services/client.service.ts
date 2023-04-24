import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../interfaces/clients.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  private baseUrl : string = environment.url_api + "clients"

  getAll() : Observable<Client[]>{
    return this.http.get<Client[]>(this.baseUrl) 
  }

  save(client: Client) : Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client); 
  }

  put(client: Client): Observable<Client> {
    return this.http.put<Client>(this.baseUrl, client); 
  }

  delete(id: number) : Observable<any>{
    return this.http.delete<any>(this.baseUrl+"/"+id); 
  }
}