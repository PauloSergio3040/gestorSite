import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ConfiguracaoComponent } from './component/configuracao/configuracao.component';
import { LoginNaoEncontradoComponent } from './pages/login-nao-encontrado/login-nao-encontrado.component';


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
  exports: [RouterModule],
})
export class AppRoutingModule { }
