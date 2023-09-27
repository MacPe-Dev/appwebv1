import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public propiedadesH1: any

  constructor(){
    this.propiedadesH1 = {
      color: '#00214a',
      fontSize: '2em'
    }
  }
  cambiarprop(){
    this.propiedadesH1 = {
      color: '#000000',
      fontSize: '4em'
    }
  }

}
