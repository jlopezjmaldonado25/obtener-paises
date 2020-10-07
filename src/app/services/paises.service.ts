import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(public httpClient: HttpClient) { }

  getPaises(): Observable<any> {
    return this.httpClient.get(
        `https://restcountries.eu/rest/v2/name/Afghanistan`,
    );
  }
}
