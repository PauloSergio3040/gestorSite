import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { LoginNaoEncontradoComponent } from './login-nao-encontrado/login-nao-encontrado.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginNaoEncontrado', component: LoginNaoEncontradoComponent},
  {path: 'estoque', component: EstoqueComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'configuracao', component: ConfiguracaoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: LoginNaoEncontradoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
