import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Servicios/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  usuario = '';
  contraseña = '';

  constructor(private authService: AuthService) { }

  login(){
    this.authService.login(this.usuario, this.contraseña)
  }

  miFormulario = new FormGroup({
    usuario : new FormControl('', Validators.required),
    contraseña : new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

}
