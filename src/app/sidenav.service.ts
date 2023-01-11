import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class SidenavService {
  pagina:any = '';

  // public sidenavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  @Output() sidenav: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public sidenavToggle() {
    this.sidenav.emit(this.pagina);
    console.log('sidenav lanzado');
    console.log(this.pagina);
    // return this.sidenavToggleSubject.next(null);

  }
}
