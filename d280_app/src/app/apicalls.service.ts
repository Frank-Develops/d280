import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Subject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  // private data = new Subject<string>();
  // data$ = this.data.asObservable();

  constructor(private http: HttpClient) {

   }

  // countryData = new BehaviorSubject("Test");

  getCountryData(id): Observable<any> {
    // console.log(`http://api.worldbank.org/v2/country/${id}?format=json`)
    return this.http.get(`http://api.worldbank.org/v2/country/${id}?format=json`);
  
  }
}
