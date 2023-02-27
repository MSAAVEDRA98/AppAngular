import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../Servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router:Router) {
    this.form = this.formBuilder.group({
      usuario:['',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
    })
  }

  onEnviar(evento:Event){
    evento.preventDefault;
    if(this.form.valid){
      this.router.navigate(['/perfil']);
    }
    else{
      this.form.markAllAsTouched();
      alert('Pone bien los datos Chango!');
    }
  }

  get usuario(){
    return(this.form.get('usuario'))
  }

  get password(){
    return(this.form.get('password'))
  }

  get passwordValid(){
    return(this.password?.touched && !this.password.valid);
  }

  get usuarioValido(){
    return(false);
  }

  ngOnInit(): void {
  }

}