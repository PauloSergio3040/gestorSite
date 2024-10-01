import { Component } from '@angular/core';
import { AutenticService } from '../../../Service/autentic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  dashboardItems: {
    label: string;
    link?: string;
    fun?: () => void;
    hide?: boolean;
  }[] = [];

  constructor(private autenService: AutenticService) {
    this.generatedDashboard();
  }

  generatedDashboard() {
    this.dashboardItems = [
      { label: 'Home', link: 'home' },
      { label: 'Estoque', link: 'estoque' },
      { label: 'Agenda', link: 'agenda' },
      { label: 'Configuração', link: 'configuracao' },
      {
        label: 'Sair',
        fun: () => {
          this.autenService.logout();
          this.generatedDashboard();
        },
        hide: !this.autenService.sessao,
      },
    ];
  }
}

// https://www.youtube.com/watch?v=56vgnOzKjBU&t=55s
