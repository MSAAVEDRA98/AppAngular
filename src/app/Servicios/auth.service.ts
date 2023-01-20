import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:4200/home';
  token:any;
  constructor(private http:HttpClient, private router:Router) { }
    login(usuario:String, contraseña:string){
      this.http.post(this.url+'/autenticate', {usuario:usuario, contraseña:contraseña})
      .subscribe((resp:any)=> {
        this.router.navigate(['perfil']);
        localStorage.setItem('auth_token',resp.token);
      })
    }
    logout(){
      localStorage.removeItem('token');
    }
    public get logIn():boolean{
      return(localStorage.getItem('token')!== null);
    }
  }