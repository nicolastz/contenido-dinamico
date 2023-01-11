import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contenido-dinamico';

  @ViewChild('sidenav') public sidenav: MatSidenav | undefined;

  constructor(public sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.sidenav.subscribe(()=> {
      this.sidenav?.toggle();
    });
  }

  abrirSidenav() {
    this.sidenavService.pagina = 'padre';
    this.sidenavService.sidenavToggle();
  }

  // valueEmittedFromChildComponent: string = '';

  // clickButton(){
  //   this.valueEmittedFromChildComponent = 'padre';
  // }

  // parentEventHandlerFunction(valueEmitted:string){
  //   this.valueEmittedFromChildComponent = valueEmitted;
  // }

  // inputSidenav() {
  //   this.
  // }
}
