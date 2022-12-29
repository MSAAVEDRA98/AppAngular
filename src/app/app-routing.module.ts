import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path:'cuentaNueva', component: CrearUsuarioComponent},
  {path:'olvidoContraseña', component: ForgotPasswordComponent},
  {path:'ingresar', component: MainPageComponent},
  {path:'**', component: Error404Component},
  {path:'', component: LoginScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
