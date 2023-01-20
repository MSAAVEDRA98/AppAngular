import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss'],
  // directives: ['AuthService']
})
export class BarraNavegacionComponent implements OnInit {
authService: any;

  constructor() { }

  logout(){
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
