import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticService {

  sessao: any;
  

  constructor( private router : Router ) {
    this.sessao = localStorage.getItem('user');
   }

  entrar(){
    
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.sessao = null;
  }

  
}
