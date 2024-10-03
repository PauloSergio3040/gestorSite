import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../component/popup/popup.component';


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
})
export class EstoqueComponent {

  constructor(public dialog:MatDialog){}

  aberto = false;
  
  flyout() {
    this.aberto = !this.aberto;
    
  }

  get iconeBtn(){
    return this.aberto ? 'close' : 'add';
  }


  abrirPopup(){
    this.dialog.open(PopupComponent, {
      width: '60%'
    })
  }
}
