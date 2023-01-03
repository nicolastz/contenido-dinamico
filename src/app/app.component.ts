import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contenido-dinamico';

  valueEmittedFromChildComponent: string = '';

  clickButton(){
    this.valueEmittedFromChildComponent = 'padre';
  }

  parentEventHandlerFunction(valueEmitted:string){
    this.valueEmittedFromChildComponent = valueEmitted;
  }
}
