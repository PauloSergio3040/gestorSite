import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ConfiguracaoComponent } from './component/configuracao/configuracao.component';
import { LoginNaoEncontradoComponent } from './pages/login-nao-encontrado/login-nao-encontrado.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PopupComponent } from './component/popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
