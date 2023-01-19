import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Error404Component } from './error404/error404.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { AcercaDePersonalComponent } from './acerca-de-personal/acerca-de-personal.component';
import { LaboralYacademicaComponent } from './laboral-yacademica/laboral-yacademica.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    MainPageComponent,
    Error404Component,
    InfoPersonalComponent,
    BarraNavegacionComponent,
    AcercaDePersonalComponent,
    LaboralYacademicaComponent,
    PruebasComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
