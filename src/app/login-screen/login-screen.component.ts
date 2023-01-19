import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor() { }

  miFormulario = new FormGroup({
    usuario : new FormControl('', Validators.required),
    contraseña : new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

}
