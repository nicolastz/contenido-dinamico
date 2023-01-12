import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { DialogService } from './dialog.service';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contenido-dinamico';

  @ViewChild('sidenav') public sidenav: MatSidenav | undefined;

  constructor(public sidenavService: SidenavService,
              public dialogService: DialogService) {}

  ngOnInit() {
    this.sidenavService.sidenav.subscribe(()=> {
      this.sidenav?.toggle();
    });

    // this.dialogService.dialog.subscribe(()=> {
    //   this.dialog?
    // });
  }

  abrirSidenav() {
    this.sidenavService.pagina = 'padre';
    this.sidenavService.sidenavToggle();
  }

  abrirDialog() {
    this.dialogService.pagina = 'padre';
    this.dialogService.abrirDialog();
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
