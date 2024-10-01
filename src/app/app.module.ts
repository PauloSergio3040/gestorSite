import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ConfiguracaoComponent } from './component/configuracao/configuracao.component';
import { LoginNaoEncontradoComponent } from './pages/login-nao-encontrado/login-nao-encontrado.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './component/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    // HomeComponent,
    EstoqueComponent,
    AgendaComponent,
    ConfiguracaoComponent,
    ConfiguracaoComponent,
    LoginNaoEncontradoComponent,
    HeaderComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
