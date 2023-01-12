import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()

export class SidenavService {
  pagina:any = '';

  @Output() sidenav: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public sidenavToggle() {
    this.sidenav.emit(this.pagina);
    console.log('sidenav lanzado');
    console.log(this.pagina);
  }
}
