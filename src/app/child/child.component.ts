import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DialogService } from '../dialog.service';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  pagina:any = '';

  constructor(private sidenavService: SidenavService,
              private dialogService: DialogService) {}

  abrirSidenav() {
    this.sidenavService.pagina = 'hijo';
    this.sidenavService.sidenavToggle();
  }

  abrirDialog() {
    this.dialogService.pagina = 'hijo';
    this.dialogService.abrirDialog();
  }

  // clickButton(){
  //   this.buttonClicked.emit("hijo");
  // }

}
