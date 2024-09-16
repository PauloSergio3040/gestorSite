import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardItems: {label: string, link: string }[] = [
    { label: 'Home', link: '/home'},
    { label: 'Login', link: '/login'},
    { label: 'Estoque', link: '/estoque'},
    { label: 'Agenda', link: '/agenda'},
    { label: 'Configuracao', link: '/configuracao'},
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
