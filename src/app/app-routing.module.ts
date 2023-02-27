import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Error404Component } from './error404/error404.component';
import { AuthGuard } from './Servicios/auth.guard';

const routes: Routes = [
  {path:'', component: LoginScreenComponent, pathMatch:'full'},
  {path:'login', component: LoginScreenComponent},
  {path:'perfil',
  component: MainPageComponent},
  {path:'**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }