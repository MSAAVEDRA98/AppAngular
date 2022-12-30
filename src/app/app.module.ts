import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Error404Component } from './error404/error404.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { AcercaDePersonalComponent } from './acerca-de-personal/acerca-de-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CrearUsuarioComponent,
    ForgotPasswordComponent,
    MainPageComponent,
    Error404Component,
    InfoPersonalComponent,
    BarraNavegacionComponent,
    AcercaDePersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
