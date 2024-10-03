import { Component } from '@angular/core';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],

})
export class PopupComponent {
  // https://www.youtube.com/watch?v=zUp3Unc-ynM

  busc: any;

  pegarImg(event: any){
    if(event.target.files){
      const arq = event.target.files[0];
      const read = new FileReader();
      read.onload = e => this.busc = read.result;
      read.readAsDataURL(arq);
    }
  } 
}
