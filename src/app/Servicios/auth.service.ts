import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'http://localhost:4200/home';
  token:any;
  constructor(private http:HttpClient, private router:Router) {
    
  }
}
