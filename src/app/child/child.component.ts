import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  pagina:any = '';

  constructor(private sidenavService: SidenavService) {}

  abrirSidenav() {
    this.sidenavService.pagina = 'hijo';
    this.sidenavService.sidenavToggle();
  }

  // clickButton(){
  //   this.buttonClicked.emit("hijo");
  // }

}
