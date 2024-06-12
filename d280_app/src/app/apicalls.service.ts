import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
 
  constructor(private http: HttpClient) {

   }


  getCountryData(id): Observable<any> {
    return this.http.get(`http://api.worldbank.org/v2/country/${id}?format=json`);
  
  }
}
