import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminLogin } from '../Model/admin-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private httpClient: HttpClient) { }

  adminLogin(adminLogin: AdminLogin): Observable<any>{
    let url = "http://localhost:8085/validateAdmin";
    return this.httpClient.post(url, adminLogin);
  }

}
