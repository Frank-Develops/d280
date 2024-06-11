import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapComponent } from './map/map.component';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  constructor(private http: HttpClient) { }

  getCountryData(id): Observable<any> {
    console.log(`http://api.worldbank.org/v2/country/${id}?format=json`)
    return this.http.get(`http://api.worldbank.org/v2/country/${id}?format=json`);
  }
}
