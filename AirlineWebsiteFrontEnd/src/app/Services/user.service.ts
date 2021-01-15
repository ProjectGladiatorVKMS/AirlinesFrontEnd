import { SearchFlightDT } from './../Model/search-flight-dt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../Model/flight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  fetchFlights(flightSearchDT: SearchFlightDT): Observable<any>{
    let url = "http://localhost:8085/searchFlights";
    return this.httpClient.post(url, flightSearchDT);
  }
}
