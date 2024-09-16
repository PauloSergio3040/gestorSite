import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { LoginNaoEncontradoComponent } from './login-nao-encontrado/login-nao-encontrado.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    EstoqueComponent,
    AgendaComponent,
    ConfiguracaoComponent,
    ConfiguracaoComponent,
    LoginNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
